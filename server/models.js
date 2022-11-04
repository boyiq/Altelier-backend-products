const db = require('./db.js');

module.exports = {
  getProduct: function (id) {
    return db.query("SELECT * FROM product where id=1")
  }
}