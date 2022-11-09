const { Pool } = require('pg');

const pool = new Pool({
  host:'localhost',
  database: 'productdata'
});

module.exports = pool;