const express = require('express')
const fixturesRouter = express.Router()
const {
  getAllFixtures,
  getFixtureById,
  getFixturesByLeague,
  getFixturesByLeagueByYear,
} = require('../controllers/fixtures')

fixturesRouter.route('/league').get(getFixturesByLeague)
fixturesRouter.route('/league/:id').get(getFixturesByLeagueByYear)
fixturesRouter.route('/').get(getAllFixtures)
fixturesRouter.route('/:id').get(getFixtureById)

module.exports = fixturesRouter
