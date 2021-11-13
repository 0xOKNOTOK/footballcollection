// @desc Custom handling middleware to standardise errors and async requests.
const CustomErrorResponse = require('../utilities/CustomErrorResponse')

// @desc Temporary database for testing.
const allClubs = require('../data/allClubs.json')

// @desc      get all supported teams.
// @route     GET /api/teams
// @access    Public
exports.getAllTeams = (req, res) => {
  try {
    res.status(200).json(allClubs)
  } catch (error) {
    res.status(500).json({ data: 'fail' })
  }
}

// @desc      get all teams by league name/id.
// @route     GET /api/teams/league
// @access    Public
exports.getTeamsByLeague = (req, res) => {
  try {
    res.status(200).json({})
  } catch (error) {
    res.status(500).json({ data: 'fail' })
  }
}

// @desc      get single team by name/id.
// @route     GET /api/teams/league/:id
// @access    Public
exports.getSingleTeamById = (req, res) => {
  try {
    res
      .status(200)
      .json({ name: 'Manchester City Football Club', abbreviation: 'MCI' })
  } catch (error) {
    res.status(500).json({ data: 'fail' })
  }
}
