const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
	{
		contact: {
			type: Object,
			required: true,
		},
		crm_response: {
			type: Object,
			default: [],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('lead', leadSchema);
