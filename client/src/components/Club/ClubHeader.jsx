import React from 'react'
import ClubInformation from './ClubInformation'

const ClubHeader = ({ team }) => {
  return (
    <div className='flex flex-col text-center w-full mb-20'>
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
        {team.name}
        <p className='text-sm sm:text-xl text-blue-300 inline'>
          {' '}
          {team.abbreviation}
        </p>
      </h1>
      <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
        Formed in 1894 Manchester City Football Club played at Maine Road until
        2003 when they moved to their new home The City of Manchester Stadium.
      </p>
      <ClubInformation />
    </div>
  )
}

export default ClubHeader
