var express = require('express');
const { fetchBook } = require('../services/book');
var router = express.Router();

/* GET book */
router.get('/:isbn', async function (req, res, next) {
  try {
    const book = await fetchBook(req.params.isbn);
    res.json(book);
  } catch (error) {
    console.error('Ocurrió un error al traer todos los libros. Error: ', error);
    next(error);
  }
});

module.exports = router;
