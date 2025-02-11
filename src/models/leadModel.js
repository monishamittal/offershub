const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
	{
		first_name: { type: String, required: true },
		last_name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		country: { type: String, required: true },
		mobile_number: { type: String, required: true },
		company: {
			name: { type: String, required: true },
		},
		website_url: { type: String },
		im_type: { type: String },
		im_id: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('leads', leadSchema);
