const Lead = require('../models/leadModel'); // Assuming the schema is saved in models/lead.js

// Controller to create a lead
const createLead = async (req, res) => {
	try {
		const { first_name, last_name, email, country, mobile_number, company, website_url, im_type, im_id } =
			req.body;
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
		});
		// Save the lead
		await newLead.save();
		return res.status(201).json({ message: 'Lead created successfully', lead: newLead });
	} catch (error) {
		return res.status(500).json({ message: 'Error creating lead', error: error.message });
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
