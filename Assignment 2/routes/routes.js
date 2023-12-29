/**
 * @module Routes
 * @description This module defines the API routes for performing CRUD operations on books.
 */

import express from 'express';
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from './controller.js';

// Create an Express router instance to handle the book-related routes.
const routes = express.Router();

/**
 * @route GET /books
 * @function
 * @description Endpoint to retrieve a list of all books.
 * @returns {Array} An array of book objects retrieved from the database.
 */
routes.get('/books', getAllBooks);

/**
 * @route GET /books/:id
 * @function
 * @description Endpoint to retrieve a specific book by its ID.
 * @param {string} req.params.id - The ID of the book to be retrieved.
 * @returns {Object|null} The book object if found, null if the book with the given ID is not found.
 */
routes.get('/books/:id', getBookById);

/**
 * @route POST /books
 * @function
 * @description Endpoint to create a new book and add it to the database.
 * @param {Object} req.body - The book object to be created.
 * @returns {Object} The created book object.
 */
routes.post('/books', createBook);

/**
 * @route PUT /books/:id
 * @function
 * @description Endpoint to update an existing book by its ID.
 * @param {string} req.params.id - The ID of the book to be updated.
 * @param {Object} req.body - The updated book object data.
 * @returns {Object|null} The updated book object if found, null if the book with the given ID is not found.
 */
routes.put('/books/:id', updateBookById);

/**
 * @route DELETE /books/:id
 * @function
 * @description Endpoint to delete an existing book by its ID.
 * @param {string} req.params.id - The ID of the book to be deleted.
 * @returns {Object} A success message if the book is deleted, an error message if the book with the given ID is not found.
 */
routes.delete('/books/:id', deleteBookById);

// Export the router to be used by the main Express application.
export default routes;