import React from 'react'

const TeamsCard = ({ name, badge }) => {
  return (
    <div className='flex-grow w-screen md:pl-8 pl-6 flex sm:items-center items-start flex-row'>
      <div className='flex-shrink-0 w-10 h-10 bg-blue-400 text-blue-500 rounded-full inline-flex items-center justify-center'>
        <img alt='TEMP' />
      </div>
      <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
        <span className='font-medium title-font text-gray-900 dark:text-gray-200 mb-1 text-xl'>
          <a href='/clubpage' className=''>
            {name}
          </a>
        </span>
      </div>
    </div>
  )
}

export default TeamsCard
