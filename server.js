const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const booksRoutes = require('./routes/books');
const usersRoutes = require('./routes/users');
const app = express();

mongoose
  .connect(
    'mongodb+srv://library:library@cluster0.snhvij7.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('DB connection successful!'))
  .catch((error) => console.log(error.message));



//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// Use routes
app.use('/api/books', booksRoutes);
app.use('/api/users', usersRoutes);
const port = 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

