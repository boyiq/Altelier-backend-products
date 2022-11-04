const db = require('./db.js');

module.exports = {
  getProductInfo: function (id) {
    return db.query("SELECT * FROM product where id=1")
  },

  getFeatures: function (id) {
    return db.query("SELECT feature, value FROM features where product_id=1")
  },


}