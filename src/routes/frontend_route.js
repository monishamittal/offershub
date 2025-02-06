const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

function getImagesFromDirectory(dirPath) {
	if (!fs.existsSync(dirPath)) {
		console.error('Directory does not exist:', dirPath);
		return [];
	}

	const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];

	try {
		const files = fs.readdirSync(dirPath);
		return files.filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()));
	} catch (err) {
		console.error('Error reading directory:', err);
		return [];
	}
}

router.get('/', async (req, res) => {
	res.render('index', {
		title: 'OffersHub - Performance Marketing &amp; Affiliate Tracking Software',
	});
});

router.get('/emailMarketers', async (req, res) => {
	res.render('emailMarketers', {
		title: 'Email Marketers - Offershub',
	});
});

router.get('/agencies', async (req, res) => {
	res.render('agencies', {
		title: 'Agencies - Offershub',
	});
});

router.get('/advertisers', async (req, res) => {
	res.render('advertisers', {
		title: 'Advertisers - Offershub',
	});
});

router.get('/mediaBuyers', async (req, res) => {
	res.render('mediaBuyers', {
		title: 'Media Buyers - Offershub',
	});
});

router.get('/affiliateNetwork', async (req, res) => {
	res.render('affiliateNetwork', {
		title: 'Affiliate Network - Offershub',
	});
});

router.get('/securityCompliance', async (req, res) => {
	res.render('securityCompliance', {
		title: ' Security & Compliance - Offershub',
	});
});

router.get('/onPremise', async (req, res) => {
	res.render('onPremise', {
		title: ' On Premise - Offershub',
	});
});

router.get('/saasCloud', async (req, res) => {
	res.render('saasCloud', {
		title: ' SAAS Cloud - Offershub',
	});
});

router.get('/features', async (req, res) => {
	res.render('features', {
		title: ' Features - Offershub',
	});
});

router.get('/apiIntegration', async (req, res) => {
	res.render('apiIntegration', {
		title: ' Api Integration - Offershub',
	});
});

router.get('/privacy', async (req, res) => {
	res.render('privacy', {
		title: ' Privacy Policy - Offershub',
	});
});

router.get('/terms', async (req, res) => {
	res.render('terms', {
		title: ' Terms of Service - Offershub',
	});
});

router.get('/overview', async (req, res) => {
	res.render('overview', {
		title: ' Overview - Offershub',
	});
});

router.get('/pricing', async (req, res) => {
	res.render('pricing', {
		title: ' Pricing - Offershub',
	});
});

router.get('/influencertracking', async (req, res) => {
	res.render('influencertracking', {
		title: ' Influencer Tracking - Offershub',
	});
});

router.get('/ecommercetracking', async (req, res) => {
	res.render('ecommercetracking', {
		title: ' E-commerce Tracking - Offershub',
	});
});

router.get('/datastream', async (req, res) => {
	res.render('datastream', {
		title: ' Data Stream - Offershub',
	});
});

router.get('/contactUs', async (req, res) => {
	res.render('contactUs', {
		title: 'Contact Us - Offershub',
	});
});

router.get('/aboutUs', async (req, res) => {
	res.render('aboutUs', {
		title: 'About - Offershub',
	});
});

router.get('/create-content', async (req, res) => {
	const imageDir = path.join(__dirname, '../../public/uploads');
	const images = getImagesFromDirectory(imageDir);
	res.render('createContent', {
		title: 'Draft a Story',
		uploaded_images: images,
	});
});

router.get('/blogs', async (req, res) => {
	res.render('allBlogs', {
		title: 'Blogs',
	});
});

router.get('/case-studies', async (req, res) => {
	res.render('caseStudies', {
		title: 'Success Stories',
	});
});

router.get('/case-study/:caseStoryId', async (req, res) => {
	res.render('caseStudy', {
		title: 'Success Story',
	});
});

router.get('/blog/:blog_id', async (req, res) => {
	res.render('blog', {
		title: 'Blog',
	});
});

router.get('/demo', async (req, res) => {
	res.render('demo', {
		title: 'Demo - OffersHub',
	});
});

router.get('/thank-you', async (req, res) => {
	res.render('thankYou', {
		title: 'Thank you - OffersHub',
	});
});

module.exports = router;
