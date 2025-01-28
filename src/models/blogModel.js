const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
	{
		content: { type: String, required: true },
		isPublished: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
