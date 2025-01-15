const express = require('express');
const router = express.Router();

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
module.exports = router;
