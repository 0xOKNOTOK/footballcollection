const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3002

// Body parser
app.use(express.json())

// CORS
app.use(cors())

// Route files
const teams = require('./routes/teams')
const fixturesRouter = require('./routes/fixtures')

// Mount Routes For Use

app.use('/api/teams', teams)
app.use('/api/fixtures', fixturesRouter)

app.listen(PORT, () =>
  console.log(`Football Collection API live on port: ${PORT}.`)
)
