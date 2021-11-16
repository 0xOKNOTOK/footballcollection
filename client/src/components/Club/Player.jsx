import React from 'react'

const TeamPlayer = ({ name, position, number, nationality, photo, onLoan }) => {
  return (
    <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
      <div className='h-full flex items-center border-gray-700 border p-4 rounded-lg'>
        <img
          src={photo}
          alt='player'
          className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
        />
        <div className='flex-grow'>
          <h2 className='text-gray-800 dark:text-gray-300 title-font font-medium'>
            {name}
          </h2>
          <p className='text-gray-500 font-bold '>
            {number} - {position} - {nationality}
          </p>
          {onLoan ? <p className='text-yellow-500 font-bold'>On Loan</p> : null}
        </div>
      </div>
    </div>
  )
}

export default TeamPlayer
