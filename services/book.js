const { query } = require('../bbdd/database');
const helper = require('../utils/helper');

async function fetchBook(isbn) {
  const results = await query(
    `SELECT id, isbn, title, author_name, publisher_name, num_pages, img_url FROM books WHERE isbn=${isbn}`
  );
  if (results.length > 0) return results[0];
}

async function insertBook(params) {}

async function updateBook(params) {}

async function deleteBook(params) {}

module.exports = {
  fetchBook,
  insertBook,
  updateBook,
  deleteBook,
};
