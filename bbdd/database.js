const mysql = require('mysql2/promise');
const config = require('../config');
const { Client } = require('pg');

async function query(sqlQuery, params) {
  if (config.db.isProd) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL_UNPOOLED,
    });
    await client.connect();
    const results = await client.query(sqlQuery, params);
    client.end();
    return results.rows;
  } else {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sqlQuery, params);
    connection.end();
    return results;
  }
}

module.exports = {
  query,
};
