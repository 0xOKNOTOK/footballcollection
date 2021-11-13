// TEMP LOCAL DB
const allClubs = require('../data/allClubs.json')
const premierLeagueClubs = require('../data/premierLeague.json')

// GET [ALL TEAMS FROM SUPPORTED LEAGUES]
exports.getAllTeams = (req, res) => {
  try {
    res.status(200).json(allClubs)
  } catch (error) {
    res.status(500).json({ data: 'fail' })
  }
}

// GET [ALL TEAMS FROM LEAGUE]
exports.getTeamsByLeague = (req, res) => {
  try {
    res.status(200).json({})
  } catch (error) {
    res.status(500).json({ data: 'fail' })
  }
}

// GET [ALL PREMIER LEAGUE TEAMS]
exports.getSingleTeamById = (req, res) => {
  try {
    res
      .status(200)
      .json({ name: 'Manchester City Football Club', abbreviation: 'MCI' })
  } catch (error) {
    res.status(500).json({ data: 'fail' })
  }
}
