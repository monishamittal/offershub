const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		cover_image: { type: String, required: true },
		category: { type: String, required: true },
		content: { type: String, required: true },
		isPublished: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
