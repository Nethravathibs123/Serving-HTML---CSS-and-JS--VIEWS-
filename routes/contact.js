const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

// GET request to render the Contact Us page
router.get('/contact', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}); // Ensure the path is correct



// POST request to handle form submission from Contact Us page
router.post('/contactus', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const time = req.body.time;

    console.log(`Contact Form Submitted - Name: ${name}, Email: ${email}, Phone: ${phone}, Time: ${time}`);
    res.redirect('/success'); // Redirecting after submission
});

// GET request to display success message
router.get('/success', (req, res, next) => {
    res.send('<h1>Form Successfully Filled</h1><p>Thank you for booking a call. Our representative will contact you shortly.</p><a href="/">Return to Home</a>');
});

module.exports = router;
