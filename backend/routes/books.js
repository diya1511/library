const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBookById,
  addBook,
  editBook,
  removeBook,
} = require('../controller/books');

// Routes
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', editBook);
router.delete('/:id', removeBook);

module.exports = router;
