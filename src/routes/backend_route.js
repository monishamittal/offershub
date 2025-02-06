const express = require('express');
const router = express.Router();
const contentControllers = require('../controllers/contentControllers');
const leadControllers = require('../controllers/leadControllers');

router.post('/content/create', contentControllers.createContent);
router.get('/content/get/all', contentControllers.getAllContent);
router.get('/content/get/:contentId', contentControllers.getContentById);
router.put('/content/update/:contentId', contentControllers.updateContentById);
router.post('/upload-image', contentControllers.uploadImage);
router.post('/leads/create', leadControllers.createLead);
router.get('/leads/get', leadControllers.getAllLeads);

module.exports = router;
