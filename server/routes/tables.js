const express = require('express')
const tablesRouter = express.Router()
const {
  getAlltables,
  getFixtureById,
  gettablesByLeague,
  gettablesByLeagueByYear,
} = require('../controllers/tables')

tablesRouter.route('/league').get(gettablesByLeague)
tablesRouter.route('/league/:id').get(gettablesByLeagueByYear)
tablesRouter.route('/').get(getAlltables)
tablesRouter.route('/:id').get(getFixtureById)

module.exports = tablesRouter
