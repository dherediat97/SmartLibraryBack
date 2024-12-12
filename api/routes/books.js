var express = require('express');
const { fetchBooks } = require('../services/books');
const { insertBook } = require('../services/book');
var router = express.Router();

/* GET books */
router.get('/', async function (req, res, next) {
  try {
    const books = await fetchBooks(req.query.page);
    res.json(books);
  } catch (error) {
    console.error('Ocurrió un error al traer todos los libros. Error: ', error);
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    const bookCreated = await insertBook(req.body);
    if (bookCreated !== undefined)
      res.json({ message: 'created successfully' });
    else res.json({ message: 'not created' });
  } catch (error) {
    console.error('Ocurrió un error al insertar el libro. Error: ', error);
    next(error);
  }
});

module.exports = router;
