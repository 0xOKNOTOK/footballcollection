const express = require('express')
const fixturesRouter = express.Router()
const { getAllFixtures, getFixtureById } = require('../controllers/fixtures')

fixturesRouter.route('/').get(getAllFixtures)
fixturesRouter.route('/:id').get(getFixtureById)

module.exports = fixturesRouter
