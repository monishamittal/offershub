const Lead = require('../models/leadModel');
const newsletter = require('../models/newsletterModel');
const isProduction = process.env.NODE_ENV === 'production';
const host = isProduction ? process.env.PROD_DOMAIN : process.env.DEV_DOMAIN;

const createLead = async (req, res) => {
	const request_data = req.body;

	const saveLeadAndSubscription = async (leadData, crmResponse) => {
		try {
			await new Lead({ contact: leadData, crm_response: crmResponse }).save();
		} catch (error) {
			console.log('Error saving lead:', error);
		}
		try {
			await new newsletter({ email: leadData.email }).save();
		} catch (error) {
			console.log('Error saving newsletter subscription:', error);
		}
	};

	const sendSignupMail = async (leadData) => {
		try {
			await fetch(`${host}/signup-mail`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(leadData),
			});
		} catch (error) {
			console.log('Error sending signup mail:', error);
		}
	};

	try {
		const response = await fetch('https://offershub.myfreshworks.com/crm/sales/api/contacts', {
			method: 'POST',
			headers: {
				Authorization: `Token token=${process.env.FRESHWORKS_API_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ contact: request_data }),
		});

		const data = await response.json();

		if (response.ok) {
			await saveLeadAndSubscription(request_data, data);
			await sendSignupMail(request_data);
			return res.status(201).json({ status: true, message: 'Lead added successfully!' });
		} else {
			return res.status(data.errors.code).json({
				status: false,
				message: data.errors.message || ['Error adding lead'],
			});
		}
	} catch (error) {
		await saveLeadAndSubscription(request_data, { status: 'failure' });
		console.log('Error creating lead:', error);
		return res.status(500).json({ status: false, message: error.message });
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
