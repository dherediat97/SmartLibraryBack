const { query } = require('../bbdd/database');
const helper = require('../utils/helper');

async function fetchReviews(id, page = 1) {
  const results = await query(
    `SELECT id, title, author_name,content,book_id FROM reviews WHERE book_id=${id}`
  );
  const reviews = helper.emptyOrRows(results);
  const info = { page };

  return {
    reviews,
    info,
  };
}

async function insertReview(params) {}

async function updateReview(params) {}

async function deleteReview(params) {}

module.exports = {
  fetchReviews,
  insertReview,
  updateReview,
  deleteReview,
};
