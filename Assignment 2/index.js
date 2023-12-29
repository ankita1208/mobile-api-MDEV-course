/**
 * @module Server
 * @description Main module for the Express server setup and configuration.
 */

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
import connectDB from './db.js';

// Create an Express application instance.
const app = express();
const PORT = 3000;

// Use body-parser middleware to handle JSON and URL-encoded data.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the MongoDB database.
connectDB();

// Use the defined routes for '/api' endpoint.
app.use('/api', routes);

/**
 * @route GET /
 * @function
 * @description Root endpoint to check if the server is running.
 * @returns {string} A welcome message indicating the server is running and the port number it's running on.
 */
app.get('/', (req, res) => res.send(`Node and express server is running on ${PORT}`));

// Start the server and listen on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});