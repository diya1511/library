const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  genres: { type: [String], required: true },
  isAvailable: { type: Boolean, default: true }, // To indicate whether the book is available or not
});

const books = mongoose.model('Book', bookSchema);

module.exports = books;