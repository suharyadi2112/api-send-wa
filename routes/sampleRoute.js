const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');
const { client, initializeClient, sendMessageWhatsAppOTPReservasi  }  = require('../controllers/sendWa');

router.get('/sample', sampleController.getSampleData);

router.get('/qr', (req, res) => {
    if (!client) {
        initializeClient();
    }
    res.send('Please check your console for the QR code to scan.');
});

router.post('/send', sendMessageWhatsAppOTPReservasi);

module.exports = router;
