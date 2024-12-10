const { query } = require('../bbdd/database');
const helper = require('../utils/helper');
const config = require('../config');

async function fetchBooks(page = 1) {
  const offset = helper.getOffset(page, config.pageSize);
  const results = await query(
    `SELECT * FROM books LIMIT ${offset},${config.pageSize}`
  );
  const books = helper.emptyOrRows(results);
  const info = { page, pageSize: config.pageSize };

  return {
    books,
    info,
  };
}

async function insertBooks(params) {}

async function updateBooks(params) {}

async function deleteBooks(params) {}

module.exports = {
  fetchBooks,
  insertBooks,
  updateBooks,
  deleteBooks,
};
