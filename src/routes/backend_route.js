const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const blogController = require('../controllers/blogControllers');
const caseStudyController = require('../controllers/caseStudyControllers');

router.post('/blog/create', blogController.createBlog);
router.get('/blog/get/all', blogController.getBlogs);
router.get('/blog/get/:blogId', blogController.getBlogById);
router.put('/update/blog/:blogId', blogController.updateBlog);

router.post('/caseStudy', caseStudyController.createCaseStudy);
router.get('/get/caseStudy', caseStudyController.getCaseStudy);
router.put('/update/caseStudy/:caseStudyId', caseStudyController.updateCaseStudy);

function formatImageName(filename) {
	return filename
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9.-]/g, '');
}

router.post('/upload', (req, res) => {
	let files = req.files;
	if (!(files && files.length > 0)) {
		return res.status(400).send({ status: false, message: 'Please provide an image' });
	}
	const { buffer, originalname } = files[0];
	const uniqueFileName = formatImageName(originalname);
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
});

module.exports = router;
