// Importing required modules and packages
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

// Importing route handlers
const indexRouter = require('./routes/index.js');
const productsRouter = require('./routes/products.js');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Setting up the view engine as EJS and specifying views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes handling
// Using indexRouter for the root route ('/')
app.use('/', indexRouter);
// Using productsRouter for routes starting with '/products'
app.use('/products', productsRouter);

// Route for rendering the 'addProduct' page
app.get('/new-products', (req, res) => {
    res.render('addProduct');
});

// Error handling middleware for handling 404 Not Found errors
app.use((req, res) => {
    res.status(404).render('error'); // Render the 'error' page for 404 errors
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
