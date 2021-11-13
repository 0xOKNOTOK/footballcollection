const express = require('express')
const { getPremierLeagueTeams } = require('../controllers/teams')
const teamsRouter = express.Router()

teamsRouter.route('/:id').get(getPremierLeagueTeams)

module.exports = teamsRouter
