import React from 'react'

const Fixture = () => {
  return (
    <div className='py-8 px-4 lg:w-4/10 mr-2 mt-2 border rounded-md border-gray-500 dark:border-gray-700'>
      <div className='h-full flex items-start'>
        <div className='w-12 flex-shrink-0 flex flex-col text-center leading-none'>
          <span className='text-gray-700  dark:text-gray-300 pb-2 mb-2 border-b-2 border-gray-500 dark:border-gray-200'>
            Jul
          </span>
          <span className='font-medium text-lg text-gray-600 dark:text-gray-400 title-font leading-none'>
            18
          </span>
          <span className='flex flex-col items-center justify-items-center justify-center h-full'>
            <img
              alt=' Manchester City Football Club Crest'
              className='w-10 h-10 mt-2 mb-2'
            />
            <img
              alt='Manchester United Football Club Crest'
              className='w-10 h-10'
            />
          </span>
        </div>
        <div className='flex-grow pl-6'>
          <h2 className='tracking-widest text-xs title-font font-medium text-red-500 mb-1'>
            PREMIER LEAGUE
          </h2>
          <h1 className='title-font text-xl font-medium text-gray-700 dark:text-gray-200 mb-3'>
            <a href='/clubpage' className='underline'>
              Manchester City
            </a>{' '}
            vs{' '}
            <a href='/clubpage' className='underline'>
              Manchester United
            </a>
          </h1>
          <h2 className='leading-relaxed mb-5 text-gray-700 dark:text-gray-300'>
            Score: 2-0
          </h2>
          <p className='leading-none mb-5 text-gray-600 dark:text-gray-400'>
            Kick-off: 12:30, Etihad Stadium
          </p>
        </div>
      </div>
    </div>
  )
}

export default Fixture
