const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bas',
  password: 'jdea123',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;