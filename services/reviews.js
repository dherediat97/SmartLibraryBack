const { query } = require('express');

async function fetchReviews() {
  const books = await query(`SELECT * FROM reviews`);
  return {
    books,
    pages: 1,
    totalSize: books.length,
  };
}

async function insertReviews(params) {}

async function updateReviews(params) {}

async function deleteReviews(params) {}

module.exports = {
  fetchReviews,
  insertReviews,
  updateReviews,
  deleteReviews,
};
