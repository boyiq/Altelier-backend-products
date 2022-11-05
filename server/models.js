const db = require('./db.js');

module.exports = {
  getProductInfo: function (id) {
    return db.query(`SELECT * FROM product where id=${id}`)
  },

  getFeatures: function (id) {
    return db.query(`SELECT feature, value FROM features where product_id=${id}`)
  },

  getStyles: function(id) {
    return db.query(`
      SELECT
        id as style_id, name, sale_price, original_price, default_style
      FROM styles where productid=${id}`)
  },

  getPhotos: function(style_id) {
    return db.query(`SELECT thumbnail_url, url FROM photos WHERE styleid=${style_id}`)
  },

/*   getAll: function(id) {
    return db.query(`SELECT * FROM product JOIN styles ON product.id=styles.productid JOIN photos ON styles.id=photos.styleid WHERE product.id=${id}`);
  } */
}