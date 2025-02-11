const Lead = require('../models/leadModel');
const newsletter = require('../models/newsletterModel');
const isProduction = process.env.NODE_ENV === 'production';
const host = isProduction ? process.env.PROD_DOMAIN : process.env.DEV_DOMAIN;

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

		const lead = {
			first_name,
			last_name,
			email,
			country,
			mobile_number,
			company: {
				name: company,
			},
			website_url,
			im_type,
			im_id,
		};

		const response = await fetch('https://offershub.myfreshworks.com/crm/sales/api/contacts', {
			method: 'POST',
			headers: {
				Authorization: `Token token=${process.env.FRESHWORKS_API_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ contact: lead }),
		});

		const data = await response.json();

		if (response.ok) {
			const isEmailExists = await Lead.find({ email });

			if (Object.keys(isEmailExists).length !== 0) {
				return res.send({ status: true, message: 'Email already Exists' });
			}

			const newLead = new Lead(lead);
			await newLead.save();
			await fetch(`${host}/signup-mail?to=${email}&name=${first_name}`);

			if (isSubscribed) {
				const subscribedMail = new newsletter({ email });
				await subscribedMail.save();
			}
			return res.status(201).json({ status: true, message: 'Lead added successfully!', lead: newLead });
		} else {
			const rubyErrorString = data.errors.message[1].replace(/^Mcr error /, '');

			const jsonString = rubyErrorString
				.replace(/"=>/g, '":')
				.replace(/"(\d+)",/g, '$1,')
				.replace(/nil/g, 'null');

			const parsedError = JSON.parse(jsonString);

			data.errors.message[1] = parsedError;

			return res.status(data.errors.code).json({
				status: false,
				message: data.errors.message[1].message || ['Error adding lead'],
			});
		}
	} catch (error) {
		return res.status(500).json({ status: false, message: 'Error creating lead', error: error.message });
	}
};

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
