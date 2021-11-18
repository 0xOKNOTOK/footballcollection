import React from 'react'

const TeamsCard = ({ team }) => {
  console.log(team)
  return (
    <div className='flex flex-wrap mt-3 content-center justify-center'>
      <div className='flex-grow w-full md:pl-8 pl-6 flex sm:items-center items-start flex-row'>
        <div className='flex-grow flex-row sm:pl-6 sm:mt-0'>
          <p className='inline-flex px-10'>{team.position}</p>
          <img
            src={team.clubCrest}
            alt='TEMP'
            width='25px'
            className='inline-flex '
          />
          <span className='font-medium px-10 title-font text-gray-900 dark:text-gray-200 mb-1 text-xl '>
            <a href='/clubpage' className=''>
              {team.name}
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamsCard
