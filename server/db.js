const { Pool } = require('pg');

const pool = new Pool({
  host:'localhost',
  database: 'productdata'
});

/* pool
  .query('SELECT * FROM users WHERE id = $1', [1])
  .then(res => console.log('user:', res.rows[0]))
  .catch(err =>
    setImmediate(() => {
      throw err
    })
  ) */

module.exports = pool;