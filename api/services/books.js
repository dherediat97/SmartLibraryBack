const { query } = require('../bbdd/database');
const { isProd, config } = require('../config');
const helper = require('../utils/helper');

async function fetchBooks(page = 1) {
  const offset = helper.getOffset(page, config.pageSize);
  var results;
  if (isProd === 'false') {
    results = await query(
      `SELECT id,isbn,title,date_published,author_name,publisher_name, num_pages, img_url
     FROM books ORDER BY date_published ASC LIMIT ${config.pageSize},${offset}`
    );
  } else {
    results = await query(
      `SELECT id,isbn,title,date_published,author_name,publisher_name, num_pages, img_url
     FROM books ORDER BY date_published ASC LIMIT ${config.pageSize} OFFSET ${offset}`
    );
  }

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
