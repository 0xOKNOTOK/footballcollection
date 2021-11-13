const express = require('express')
const {
  getPremierLeagueTeams,
  getAllTeams,
  getPremierLeagueTeam,
} = require('../controllers/teams')
const teamsRouter = express.Router()

teamsRouter.route('/').get(getAllTeams)
teamsRouter.route('/epl').get(getPremierLeagueTeams)
teamsRouter.route('/epl/:id').get(getPremierLeagueTeam)
module.exports = teamsRouter
