/**
 * @module BookSchema
 * @description Defines the Mongoose schema for the 'Book' model.
 */

import mongoose from 'mongoose';

// Accessing the Schema class from mongoose package.
const Schema = mongoose.Schema;

/**
 * @constant {Schema} bookSchema - Mongoose schema for the 'Book' model.
 * @property {string} BooksName - The name of the book. (Required)
 * @property {string} ISBN - The ISBN of the book. (Required)
 * @property {number} Rating - The rating of the book. (Required)
 * @property {string} Author - The author of the book. (Required)
 * @property {string} Genre - The genre of the book. (Required)
 */
const bookSchema = new Schema({
  BooksName: { type: String, required: true },
  ISBN: { type: String, required: true },
  Rating: { type: Number, required: true },
  Author: { type: String, required: true },
  Genre: { type: String, required: true },
});

/**
 * @constant {Model} BookModel - Mongoose model for the 'Book' collection using the bookSchema.
 * Represents a collection of books in the MongoDB database.
 */
export const BookModel = mongoose.model('Book', bookSchema);

// Exporting the BookModel to make it available for other parts of the application.