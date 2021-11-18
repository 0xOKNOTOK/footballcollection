import React from 'react'

const TeamsCard = ({ team }) => {
  console.log(team)
  return (
    <div className='flex-grow w-screen md:pl-8 pl-6 flex sm:items-center items-start flex-row'>
      <img src={team.clubCrest} alt='TEMP' width='25px' />
      <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
        <span className='font-medium title-font text-gray-900 dark:text-gray-200 mb-1 text-xl'>
          <a href='/clubpage' className=''>
            {team.name}
          </a>
        </span>
        <table className=' text-align-center'>
          <tr>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
            <th>Form</th>
          </tr>
          <tr>
            <td>{team.all.played}</td>
            <td>{team.all.win}</td>
            <td>{team.all.draw}</td>
            <td>{team.all.lose}</td>
            <td>{team.all.goals.for}</td>
            <td>{team.all.goals.against}</td>
            <td>{team.all.goals.for - team.all.goals.against}</td>
            <td>{team.points}</td>
            <td>{team.form}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TeamsCard
