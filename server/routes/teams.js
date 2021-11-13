const express = require('express')
const {
  getTeamsByLeague,
  getAllTeams,
  getSingleTeamById,
} = require('../controllers/teams')
const teamsRouter = express.Router()

teamsRouter.route('/').get(getAllTeams)
teamsRouter.route('/league').get(getTeamsByLeague)
teamsRouter.route('/league/:id').get(getSingleTeamById)
module.exports = teamsRouter
