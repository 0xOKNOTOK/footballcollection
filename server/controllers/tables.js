const db = require('../database/queries')
const tables = require('../data/tables.json')

exports.getAlltables = (req, res) => {
  res.status(200).json(tables)
}

exports.gettablesByLeague = (req, res) => {
  res.status(200).send(tables.data)
}

exports.gettablesByLeagueByYear = (req, res) => {
  const data = tables.data[0].PremierLeague[0]
  res.status(200).send(data)
}

exports.getFixtureById = (req, res) => {
  res.status(200).json({ data: 'success' })
}
