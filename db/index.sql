CREATE INDEX Concurrently product_index ON product(id);
CREATE INDEX Concurrently feature_product_id ON features(product_id);
CREATE INDEX Concurrently styles_index ON styles(id);
CREATE INDEX Concurrently styles_productid ON styles(productid);
CREATE INDEX Concurrently photos_styleid ON photos(styleid);
CREATE INDEX Concurrently skus_styleid ON skus(styleid);
CREATE INDEX Concurrently related_current_product_id ON related(current_product_id);