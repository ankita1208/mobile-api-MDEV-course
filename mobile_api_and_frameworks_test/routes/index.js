// Import the Express.js framework
const express = require('express');

// Create a new router instance
const router = express.Router();

// Define a route for the root URL '/'
router.get('/', (req, res) => {
    // Send the 'index.html' file as the response
    // { root: './views' } specifies the root directory for the file
    res.sendFile('index.html', { root: './views' });
});

// Export the router to make it accessible from other modules
module.exports = router;
