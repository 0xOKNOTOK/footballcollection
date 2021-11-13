const express = require('express')
const {
  getTeamsByLeague,
  getAllTeams,
  getSingleTeamById,
} = require('../controllers/teams')
const teamsRouter = express.Router()

teamsRouter.route('/').get(getAllTeams)
teamsRouter.route('/epl').get(getTeamsByLeague)
teamsRouter.route('/epl/:id').get(getSingleTeamById)
module.exports = teamsRouter
