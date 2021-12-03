import React, { useState, useContext, useEffect } from 'react'
import Dropdown from '../components/General/Dropdown'
import Footer from '../components/General/Footer'
import MainComponent from '../components/General/Main'
import TableSkeleton from '../components/Teams/TableSkeleton'

import TeamsCard from '../components/Teams/TeamsCard'
import TeamsPosition from '../components/Teams/TeamsPosition'
import FixtureContext from '../hooks/tableDataContext'

const TeamsPage = () => {
  const [filter, setFilter] = useState('2021/22')
  const [table, setTable] = useState([])
  const [leagueFilter, setLeagueFilter] = useState('PremierLeague')

  const fixturesData = useContext(FixtureContext)
  const Filtered = fixturesData.data.leagues

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
      setTable(Filtered.PremierLeague)
    } else if (leagueFilter === 'EFLChampionship') {
      setTable(Filtered.EFLChampionship)
    }
  }, [leagueFilter, Filtered.PremierLeague, Filtered.EFLChampionship])

  const handleYearFilterChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  const handleLeagueFilterChange = e => {
    e.preventDefault()
    setLeagueFilter(e.target.value)
  }

  return (
    <MainComponent>
      <section className='text-gray-600  dark:bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex-col flex flex-wrap items-center'>
          <Dropdown
            className='text-gray-700 dark:text-gray-400'
            handleFilterChange={handleYearFilterChange}
            name={'Year: '}
            options={DropdownYearOptions}
          />
          <Dropdown
            className='text-gray-700 dark:text-gray-400'
            options={DropdownLeagueOptions}
            name={'League: '}
            handleFilterChange={handleLeagueFilterChange}
          />
          <TableSkeleton>
            {filter
              ? table
                  .filter(table => table.year === filter)
                  .map((year, index) =>
                    year.table
                      .sort((a, b) => {
                        return a.position - b.position
                      })
                      .map(team => {
                        return <TeamsCard team={team} />
                      })
                  )
              : table.map((team, index) => (
                  <TeamsPosition key={index} position={index + 1}>
                    <TeamsCard name={team.name} badge={team.badge} />
                  </TeamsPosition>
                ))}
          </TableSkeleton>
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default TeamsPage
