/**
 * @module BookController
 * @description Contains functions for handling HTTP requests related to book operations.
 */

import { BookModel } from '../bookSchema.js';

/**
 * @function
 * @description Retrieves all books from the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing an array of book objects if successful,
 * or an error message and status code if an error occurs.
 */
export const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @function
 * @description Retrieves a specific book by its ID from the database.
 * @param {Object} req - Express request object containing the book ID in req.params.id.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the book object if found,
 * or an error message and status code if the book is not found.
 */
export const getBookById = async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @function
 * @description Creates a new book and adds it to the database.
 * @param {Object} req - Express request object containing the new book data in req.body.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the created book object if successful,
 * or an error message and status code if an error occurs.
 */
export const createBook = async (req, res) => {
  try {
    const newBook = new BookModel(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @function
 * @description Updates an existing book in the database by its ID.
 * @param {Object} req - Express request object containing the book ID in req.params.id
 * and the updated book data in req.body.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the updated book object if successful,
 * or an error message and status code if the book is not found or an error occurs.
 */
export const updateBookById = async (req, res) => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @function
 * @description Deletes an existing book from the database by its ID.
 * @param {Object} req - Express request object containing the book ID in req.params.id.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing a success message if the book is deleted,
 * or an error message and status code if the book is not found or an error occurs.
 */
export const deleteBookById = async (req, res) => {
  try {
    const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
    if (deletedBook) {
      res.send({ message: 'Successfully deleted book' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};