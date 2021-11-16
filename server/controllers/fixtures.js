const db = require('../database/queries')
const fixtures = require('../data/fixtures.json')

exports.getAllFixtures = (req, res) => {
  res.status(200).json(fixtures)
}

exports.getFixturesByLeague = (req, res) => {
  res.status(200).send(fixtures.data)
}

exports.getFixturesByLeagueByYear = (req, res) => {
  const data = fixtures.data[0].PremierLeague[0]
  res.status(200).send(data)
}

exports.getFixtureById = (req, res) => {
  res.status(200).json({ data: 'success' })
}
