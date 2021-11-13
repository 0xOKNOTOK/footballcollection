const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.POSTGRES_SU,
  host: 'localhost',
  database: 'api',
  password: process.env.POOL_PASSWORD,
  port: process.env.POSTGRES_PORT || 5432,
})

pool.on('connect', () => {
  console.log('PostgreSQL connection successful awaiting queries...')
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
