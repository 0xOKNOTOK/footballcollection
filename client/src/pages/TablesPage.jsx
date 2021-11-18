import React, { useState, useContext, useEffect } from 'react'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'

import TeamsCard from '../components/Teams/TeamsCard'
import TeamsPosition from '../components/Teams/TeamsPosition'
import FixtureContext from '../hooks/fixtureDataContext'

const TeamsPage = () => {
  const [filter, setFilter] = useState('2021/22')
  const [table, setTable] = useState([])
  const [leagueFilter, setLeagueFilter] = useState('PremierLeague')
  const fixturesData = useContext(FixtureContext)

  const DropdownYearOptions = [
    { id: 1, value: '2021/22' },
    { id: 2, value: '2020/21' },
    { id: 3, value: '2019/20' },
    { id: 4, value: '2018/19' },
    { id: 5, value: '2017/18' }
  ]

  const DropdownLeagueOptions = [
    { id: 1, value: 'PremierLeague' },
    { id: 2, value: 'EFLChampionship' }
  ]

  useEffect(() => {
    if (leagueFilter === 'PremierLeague') {
      const Filtered = fixturesData.data.leagues.PremierLeague
      console.log(Filtered, 'EPL')
      setTable(
        Filtered.sort((a, b) => {
          return a.position - b.position
        })
      )
    } else if (leagueFilter === 'EFLChampionship') {
      const Filtered = fixturesData.data.leagues.EFLChampionship
      console.log(Filtered, 'EFL')
      setTable(
        Filtered.sort((a, b) => {
          return a.position - b.position
        })
      )
    }
  }, [leagueFilter])

  const handleYearFilterChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  const handleLeagueFilterChange = e => {
    e.preventDefault()
    setLeagueFilter(e.target.value)
    console.log(leagueFilter)
  }

  return (
    <MainComponent>
      <section className='text-gray-600 bg-white dark:bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex-col align-center justify-items-center flex flex-wrap'>
          <Dropdown
            handleFilterChange={handleYearFilterChange}
            name={'Year: '}
            options={DropdownYearOptions}
          />
          <Dropdown
            options={DropdownLeagueOptions}
            name={'League: '}
            handleFilterChange={handleLeagueFilterChange}
          />
          {filter
            ? table
                .filter(table => table.year === filter)
                .map((year, index) =>
                  year.table
                    .sort((a, b) => {
                      return a.position - b.position
                    })
                    .map(team => {
                      return (
                        <TeamsPosition position={team.position}>
                          <TeamsCard team={team} />
                        </TeamsPosition>
                      )
                    })
                )
            : table.map((team, index) => (
                <TeamsPosition key={index} position={index + 1}>
                  <TeamsCard name={team.name} badge={team.badge} />
                </TeamsPosition>
              ))}
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default TeamsPage
