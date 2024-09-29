const sendEmail = require('../utils/sendEmails.js');
require('dotenv').config();

async function send_email(req, res) {
    try {
        const { email, message, username } = req.body;
        if (!email || !message || !username) {
            console.log("Incomplete information provided");
            return res.status(400).json({ error: "Please fill all fields..." });
        }

        const emailOptions = {
            to: email,
            subject: "Comscat Coders Coop",
            text: message,
            html: `<p>${message}</p><p>From: ${username}</p>`,
        };

        await sendEmail(emailOptions);

        console.log(`Email sent to ${email}`);
        res.status(200).json({
            message: "Thanks! We will reply to you soon."
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: "Message not sent. Please try again later." });
    }
}

module.exports = send_email;
