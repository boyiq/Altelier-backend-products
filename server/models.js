const db = require('./db.js');

module.exports = {
  getProductInfo: function (id) {
    return db.query(`
      SELECT *,
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
      `)
  },

  getStyles: function(id) {
    return db.query(`
        SELECT productid as product_id,
        (
          SELECT json_agg(row_to_json(d))
          FROM (
            SELECT id as style_id, name, sale_price, original_price, default_style,
            (
              SELECT json_agg(row_to_json(z))
              FROM (
                SELECT thumbnail_url, url
                FROM photos
                WHERE styleid=styles.id
              )z
            ) as photos,
            (
              SELECT json_object_agg(
                skus.id,
                (
                  SELECT json_build_object(
                    $$size$$, skus.size,
                    $$quantity$$, skus.quantity
                  )
                )
              ) FROM skus WHERE styleid=styles.id
            ) as skus
            FROM styles
            WHERE productid=${id}
          )d
        ) as results
        FROM styles
        WHERE productid=${id}
        LIMIT 1
    `)
  },

  getRelated: function(id) {
    return db.query(`
      SELECT
      array_agg(related_product_id)
      FROM related
      WHERE current_product_id=${id}
    `)
  },

  getSkus: function(style_id) {
    return db.query(`SELECT * FROM skus WHERE styleid=${style_id}`)
  }
}