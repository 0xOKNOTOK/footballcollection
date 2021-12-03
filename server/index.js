const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3002

// Body parser
app.use(express.json())
app.use('/cdn', express.static(path.join(__dirname, 'public')))

// CORS
app.use(cors())

// Route files
const teamsRouter = require('./routes/teams')
const tablesRouter = require('./routes/tables')

// Mount Routes For Use

app.use('/api/teams', teamsRouter)
app.use('/api/tables', tablesRouter)

app.listen(PORT, () =>
  console.log(`Football Collection API live on port: ${PORT}.`)
)
