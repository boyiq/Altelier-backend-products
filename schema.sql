CREATE DATABASE productdata;

\c productdata;

CREATE TABLE product (
  id serial PRIMARY KEY,
  name VARCHAR(255),
  slogan TEXT,
  description TEXT,
  category VARCHAR(50),
  default_price VARCHAR(50)
);

CREATE TABLE features (
  id serial PRIMARY KEY,
  product_id INT references product(id),
  feature VARCHAR(255),
  value VARCHAR(255)
);

CREATE TABLE styles (
  id serial PRIMARY KEY,
  productid INT references product(id),
  name VARCHAR(255),
  sale_price VARCHAR(50),
  original_price VARCHAR(50),
  default_style BOOLEAN
);

CREATE TABLE skus (
  id serial PRIMARY KEY,
  styleId INT references styles(id),
  size VARCHAR(255),
  quantity INT
);

CREATE TABLE photos (
  id serial PRIMARY KEY,
  styleId INT references styles(id),
  url TEXT,
  thumbnail_url TEXT
);

CREATE TABLE related (
  id serial PRIMARY KEY,
  current_product_id INT,
  related_product_id INt
);

/*   current_product_id INT references product(id) check (current_product_id > 0),
  related_product_id INT references product(id) check (related_product_id > 0) */