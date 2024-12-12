var express = require('express');
const { fetchBooks } = require('../services/books');
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

module.exports = router;
