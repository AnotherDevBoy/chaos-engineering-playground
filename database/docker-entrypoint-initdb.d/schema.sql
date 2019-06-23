CREATE DATABASE store;

USE store;

CREATE TABLE item (
  item_id BINARY(16),
  item_name VARCHAR(255),
  price FLOAT,
  PRIMARY KEY (item_id)
);
