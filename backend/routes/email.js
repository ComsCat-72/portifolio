const express = require('express');
const router = express.Router();
const send_email = require('../controllers/email.js');

router.post('/sendemail', send_email);

module.exports = router;
