exports.getPremierLeagueTeams = (req, res) => {
  try {
    res.status(200).json({ name: 'Manchester City Football Club', abbr: 'MCI' })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong...' })
  }
}
