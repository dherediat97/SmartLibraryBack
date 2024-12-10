const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sqlQuery, params) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sqlQuery, params);
  connection.end();
  return results;
}


module.exports = {
  query
}