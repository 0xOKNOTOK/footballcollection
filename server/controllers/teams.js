// TEMP LOCAL DB

const premierLeagueClubs = require('../data/premierLeague.json')

// GET [ALL TEAMS FROM SUPPORTED LEAGUES]
exports.getAllTeams = (req, res) => {
  try {
    res.status(200).json()
  } catch (error) {
    res.status(500).json({ data: 'fail' })
  }
}

// GET [ALL PREMIER LEAGUE TEAMS]
exports.getPremierLeagueTeams = (req, res) => {
  try {
    res.status(200).json(premierLeagueClubs)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong...' })
  }
}

// GET [SINGLE PREMIER LEAGUE TEAM]
exports.getPremierLeagueTeam = (req, res) => {
  try {
    const teamID = req.params.id
    res.status(200).json({ name: 'Manchester City Football Club', abbr: 'MCI' })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong...' })
  }
}
