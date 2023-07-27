CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(255) NOT NULL,
  store_owner VARCHAR(255) NOT NULL,
  store_id VARCHAR(50) NOT NULL,
  store_thumbnail VARCHAR(255) NOT NULL
);
