var express = require('express');
var router = express.Router();

/* GET reviews */
router.get('/', async function(req, res, next) {
  try {
    const books = await fetchReviews();
    res.json(books);
  } catch (error) {
    console.error("Ocurrió un error al traer todos las reseñas. Error: ", error);
    next(error);
  }
});

module.exports = router;
