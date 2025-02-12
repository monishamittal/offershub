const express = require('express');
const router = express.Router();
const contentControllers = require('../controllers/contentControllers');
const leadControllers = require('../controllers/leadControllers');
const mailControllers = require('../controllers/mailControllers');
const newsletterController = require('../controllers/newsletterController');

router.post('/content/create', contentControllers.createContent);
router.get('/content/get/all', contentControllers.getAllContent);
router.get('/content/get/:contentId', contentControllers.getContentById);
router.put('/content/update/:contentId', contentControllers.updateContentById);
router.post('/upload-image', contentControllers.uploadImage);
router.post('/leads/create', leadControllers.createLead);
router.get('/leads/get', leadControllers.getAllLeads);
router.post('/signup-mail', mailControllers.mail);
router.get('/newsletter-mail/get', newsletterController.getAllSubscribedMail);

module.exports = router;
