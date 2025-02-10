const Lead = require('../models/leadModel');
const Newsletter = require('../models/newsletterModel');

const getAllSubscribedMail = async (req, res) => {
	try {
		const mails = await Newsletter.find({}, { email: 1 }).sort({ createdAt: -1 });
		return res.status(200).json({ message: 'mail fetched successfully', mails });
	} catch (error) {
		return res.status(500).json({ message: 'Error fetching mail', error: error.message });
	}
};

const subscribeNewsletter = async (req, res) => {
	try {
		const email = req.query.email;

		let checkMail = await Newsletter.findOne({ email });
		if (checkMail) {
			return res.send({ status: true, message: 'ALREADY_SUBSCRIBED' });
		}

		let getLead = await Lead.findOne({ email });
		if (getLead) {
			await Lead.findByIdAndUpdate(getLead._id, { isSubscribed: true });
		}

		const subscribedMail = new Newsletter({ email });
		await subscribedMail.save();

		res.send({ status: true, message: 'SUBSCRIBED_SUCCESSFULLY' });
	} catch (error) {
		res.status(500).send({ status: false, message: 'INTERNAL_SERVER_ERROR', error: error.message });
	}
};

const unsubscribeNewsletter = async (req, res) => {
	try {
		const email = req.query.email;

		let checkMail = await Newsletter.findOne({ email });
		if (!checkMail) {
			return res.send({ status: true, message: 'NO_SUBSCRIBED' });
		}

		await Newsletter.deleteOne({ email });

		let getLead = await Lead.findOne({ email });
		if (getLead) {
			await Lead.findByIdAndUpdate(getLead._id, { isSubscribed: false });
		}

		res.send({ status: true, message: 'UNSUBSCRIBED_SUCCESSFULLY' });
	} catch (error) {
		res.status(500).send({ status: false, message: 'INTERNAL_SERVER_ERROR', error: error.message });
	}
};

module.exports = { getAllSubscribedMail, subscribeNewsletter, unsubscribeNewsletter };
