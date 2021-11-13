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

// Mount Routes For Use

app.use('/api/v1/teams', teams)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}! s`))
