const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.POSTGRES_SU,
  host: 'localhost',
  database: 'api',
  password: process.env.POOL_PASSWORD,
  port: process.env.POSTGRES_PORT || 5432,
})
