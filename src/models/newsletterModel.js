const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('newsletter', newsletterSchema);
