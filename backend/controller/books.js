const books = require('../models/books');

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await books.findById(id);
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await books.find({ isAvailable: true });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books.', error });
  }
};

const addBook = async (req, res) => {
  const { title, author, excerpt, content, genres } = req.body;
  const newBook = new books({
    title,
    author,
    excerpt,
    content,
    genres,
  });

  try {
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add the book.', error });
  }
};

const removeBook = async (req, res) => {
  const { id } = req.params;

  try {
    const removedBook = await books.findByIdAndRemove(id);
    if (removedBook) {
      res.json({ message: 'Book removed successfully.' });
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove the book.', error });
  }
};

const editBook = (req, res) => {};

module.exports = {
  getBooks,
  getBookById,
  addBook,
  editBook,
  removeBook,
};
