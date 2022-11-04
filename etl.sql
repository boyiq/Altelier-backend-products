COPY product(id, name, slogan, description, category, default_price) FROM '/Users/boyiqu/Desktop/Immersive/SDC/Product_data/product.csv' DELIMITER ',' CSV HEADER;

COPY features(id, product_id, feature, value) FROM '/Users/boyiqu/Desktop/Immersive/SDC/Product_data/features.csv' DELIMITER ',' CSV HEADER;

COPY styles(id, productid, name, sale_price, original_price, default_style) FROM '/Users/boyiqu/Desktop/Immersive/SDC/Product_data/styles.csv' DELIMITER ',' CSV HEADER;

COPY skus(id, styleid, size, quantity) FROM '/Users/boyiqu/Desktop/Immersive/SDC/Product_data/skus.csv' DELIMITER ',' CSV HEADER;

COPY photos(id, styleid, url, thumbnail_url) FROM '/Users/boyiqu/Desktop/Immersive/SDC/Product_data/photos.csv' DELIMITER ',' CSV HEADER;

COPY related(id, current_product_id, related_product_id) FROM '/Users/boyiqu/Desktop/Immersive/SDC/Product_data/related.csv' DELIMITER ',' CSV HEADER;

DELETE FROM related where related_product_id=0;
DELETE FROM related where current_product_id=0;

ALTER TABLE related ADD CONSTRAINT relatecurrentdid FOREIGN KEY (current_product_id) REFERENCES product(id);
ALTER TABLE related ADD CONSTRAINT relaterelateddid FOREIGN KEY (related_product_id) REFERENCES product(id);