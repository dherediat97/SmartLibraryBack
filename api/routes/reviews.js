var express = require('express');
var router = express.Router();
const { fetchReviews } = require('../services/review');

/* GET review */
router.get('/:id', async function (req, res, next) {
  try {
    const reviews = await fetchReviews(req.params.id);
    res.json(reviews);
  } catch (error) {
    console.error(
      'Ocurrió un error al traer todos las reseñas. Error: ',
      error
    );
    next(error);
  }
});

module.exports = router;
