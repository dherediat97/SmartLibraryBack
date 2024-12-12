const { query } = require('../bbdd/database');
const helper = require('../utils/helper');
const config = require('../api/config');

async function fetchReviews(id, page = 1) {
  const offset = helper.getOffset(page, config.pageSize);
  const results = await query(
    `SELECT id, title, author_name,content,book_id FROM reviews WHERE book_id=${id}`
  );
  const reviews = helper.emptyOrRows(results);
  const info = { page, pageSize: config.pageSize };

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
