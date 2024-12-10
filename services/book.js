const { query } = require('../bbdd/database');
const helper = require('../utils/helper');

async function fetchBook(isbn) {
  const results = await query(
    `SELECT id,isbn,title,author_name,publisher_name,num_pages FROM books WHERE isbn=${isbn}`
  );
  const book = helper.emptyOrRows(results);
  return book;
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
