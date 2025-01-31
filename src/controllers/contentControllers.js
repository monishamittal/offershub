const contentModel = require('../models/contentModel');
const fs = require('fs');
const path = require('path');

function formatImageName(filename) {
	return filename
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9.-]/g, '');
}

const createContent = async function (req, res) {
	try {
		const data = req.body;
		const content = await contentModel.create(data);
		return res.status(201).send({ status: true, data: content });
	} catch (err) {
		return res.status(500).send({ status: false, msg: err.message });
	}
};

const getAllContent = async function (req, res) {
	try {
		const type = req.query.type;
		const filter = {};
		if (type) {
			filter.type = type;
		}

		const content = await contentModel.find({ ...filter }).sort({ createdAt: -1 });
		if (content.length === 0) {
			return res.status(404).send({ status: false, msg: 'No content found' });
		}
		return res.status(200).send({
			status: true,
			data: content,
		});
	} catch (err) {
		return res.status(500).send({ status: false, msg: err.message });
	}
};

const getContentById = async function (req, res) {
	try {
		const content = await contentModel.findById(req.params.contentId);
		if (!content) {
			return res.status(404).send({ status: false, msg: 'No content found' });
		}
		return res.status(200).send({
			status: true,
			data: content,
		});
	} catch (err) {
		return res.status(500).send({ status: false, msg: err.message });
	}
};

const updateContentById = async function (req, res) {
	try {
		const contentId = req.params.contentId;
		const { title, content: innerContent } = req.body;

		const updateFields = {
			$set: {
				title,
				innerContent,
			},
		};

		const updatedContent = await contentModel.findByIdAndUpdate({ _id: contentId }, updateFields, {
			new: true,
		});

		if (!updatedContent) {
			return res.status(404).send({ status: false, msg: 'Content not found' });
		}

		return res.status(200).send({ status: true, data: updatedContent });
	} catch (err) {
		return res.status(500).send({ status: false, msg: err.message });
	}
};
const uploadImage = async function (req, res) {
	let files = req.files;
	if (!(files && files.length > 0)) {
		return res.status(400).send({ status: false, message: 'Please provide an image' });
	}
	const { buffer, originalname } = files[0];
	const timestamp = Date.now();
	const uniqueFileName = timestamp + '_' + formatImageName(originalname);
	const uploadDir = path.join(__dirname, '../../public/uploads');
	const filePath = path.join(uploadDir, uniqueFileName);
	if (!fs.existsSync(uploadDir)) {
		fs.mkdirSync(uploadDir, { recursive: true });
	}
	fs.writeFile(filePath, buffer, (err) => {
		if (err) {
			console.error('Error saving file:', err);
			return res.status(500).json({ error: 'Failed to save file' });
		}
		console.log('File saved:', filePath);
		res.status(200).json({
			message: 'File uploaded successfully',
			filePath: `/uploads/${uniqueFileName}`,
		});
	});
};

module.exports.createContent = createContent;
module.exports.getAllContent = getAllContent;
module.exports.getContentById = getContentById;
module.exports.updateContentById = updateContentById;
module.exports.uploadImage = uploadImage;
