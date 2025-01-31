const express = require('express');
const router = express.Router();
const contentControllers = require('../controllers/contentControllers');

router.post('/content/create', contentControllers.createContent);
router.get('/content/get/all', contentControllers.getAllContent);
router.get('/content/get/:contentId', contentControllers.getContentById);
router.put('/content/update/:contentId', contentControllers.updateContentById);
router.post('/upload-image', contentControllers.uploadImage);

module.exports = router;
