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

  const fixturesData = useContext(FixtureContext)

  useEffect(() => {
    const Filtered = fixturesData.data.leagues.PremierLeague
    setTable(
      Filtered.sort((a, b) => {
        return a.position - b.position
      })
    )
  }, [fixturesData])

  const handleFilterChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  return (
    <MainComponent>
      <section className='text-gray-600 bg-white dark:bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex-col align-center justify-items-center flex flex-wrap'>
          <Dropdown handleFilterChange={handleFilterChange} />
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
                          <TeamsCard name={team.name} badge={team.badge} />
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
