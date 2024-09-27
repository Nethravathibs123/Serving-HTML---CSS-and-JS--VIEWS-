const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

// GET request to render the Contact Us page
router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

// POST request to handle form submission from Contact Us page
router.post('/contactus', (req, res, next) => {
    const { name, email, phone, message } = req.body; // Destructure the request body
    console.log(`Contact Form Submitted - Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);

    // Handle the form submission logic here, such as saving to a database or sending an email

    res.redirect('/'); // Redirecting after submission, adjust as needed
});

module.exports = router;
