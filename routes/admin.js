const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

// GET request to render Add Product page
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// POST request to handle adding a product
router.post('/add-product', (req, res, next) => {
    const productTitle = req.body.title;
    console.log(`Product Added: ${productTitle}`);
    res.redirect('/'); // Redirect to the admin page
});

module.exports = router;  
