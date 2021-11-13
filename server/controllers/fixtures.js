const db = require('../database/queries')

exports.getAllFixtures = (req, res) => {
  res.status(200).json({ data: 'success' })
}

exports.getFixtureById = (req, res) => {
  res.status(200).json({ data: 'success' })
}
