const Lead = require('../models/leadModel');
const newsletter = require('../models/newsletterModel');
const isProduction = process.env.NODE_ENV === 'production';
const host = isProduction ? process.env.PROD_DOMAIN : process.env.DEV_DOMAIN;

// Controller to create a lead
const createLead = async (req, res) => {
	try {
		const {
			first_name,
			last_name,
			email,
			country,
			mobile_number,
			company,
			website_url,
			im_type,
			im_id,
			isSubscribed,
		} = req.body;

		const isEmailExists = await Lead.find({ email });

		if (Object.keys(isEmailExists).length !== 0) {
			return res.send({ status: 'false', message: 'Email already Exists' });
		}

		// Create a new lead
		const newLead = new Lead({
			first_name,
			last_name,
			email,
			country,
			mobile_number,
			company,
			website_url,
			im_type,
			im_id,
			isSubscribed,
		});
		// Save the lead
		await newLead.save();

		await fetch(`${host}/signup-mail?to=${email}&name=${first_name}`);

		if (isSubscribed) {
			const subscribedMail = new newsletter({ email });
			await subscribedMail.save();
		}

		return res.status(201).json({ status: 'true', message: 'Lead created successfully', lead: newLead });
	} catch (error) {
		return res
			.status(500)
			.json({ status: 'false', message: 'Error creating lead', error: error.message });
	}
};

// Controller to get all leads
const getAllLeads = async (req, res) => {
	try {
		const leads = await Lead.find().sort({ createdAt: -1 });
		return res.status(200).json({ message: 'Leads fetched successfully', leads });
	} catch (error) {
		return res.status(500).json({ message: 'Error fetching leads', error: error.message });
	}
};

module.exports = {
	createLead,
	getAllLeads,
};
