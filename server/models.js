const db = require('./db.js');

module.exports = {
  getProductInfo: function (id) {
    return db.query(`
      SELECT row_to_json(t)
      FROM (
        SELECT id, name, slogan, description, category, default_price,
        (
          SELECT json_agg(row_to_json(d))
          FROM (
            SELECT feature, value
            FROM features
            WHERE product_id=product.id
          )d
        ) as features
        FROM product
        WHERE id=${id}
      )t`)
  },

  getFeatures: function(id) {
    return db.query(`SELECT feature, value FROM features
      WHERE product_id=${id}`)
  }



/*   getFeatures: function (id) {
    return db.query(`SELECT feature, value FROM features where product_id=${id}`)
  },

  getStyles: function(id) {
    return db.query(`
      SELECT
        id as style_id, name, sale_price, original_price, default_style
      FROM styles where productid=${id}`)
  },

  getPhotos: function(style_id) {
    return db.query(`SELECT styleid, thumbnail_url, url FROM photos WHERE styleid=${style_id}`)
  },

  getSkus: function(style_id) {
    return db.query(`SELECT styleid, size, quantity FROM skus WHERE styleid=${style_id}`)
  },

  getRelated: function(id) {
    return db.query(`SELECT array_agg(related_product_id) FROM related WHERE current_product_id=${id}`)
  } */
}