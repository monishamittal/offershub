const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
	{
		type: { type: String, required: true, enum: ['blog', 'case-study'] },
		title: { type: String, required: true },
		cover_image: { type: String, required: true },
		category: { type: String, required: true },
		content: { type: String, required: true },
		isPublished: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('content', contentSchema);
