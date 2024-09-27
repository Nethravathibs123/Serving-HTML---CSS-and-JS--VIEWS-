const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Importing Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact'); // Importing contact routes

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Using the Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);



// 404 Error Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Server Listening on Port 3000
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
