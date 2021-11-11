import React from 'react'

const Fixture = () => {
  return (
    <div class='py-8 px-4 lg:w-4/10 mr-2 border rounded-md border-gray-500 dark:border-gray-700'>
      <div class='h-full flex items-start'>
        <div class='w-12 flex-shrink-0 flex flex-col text-center leading-none'>
          <span class='text-gray-500 pb-2 mb-2 border-b-2 border-gray-200'>
            Jul
          </span>
          <span class='font-medium text-lg text-gray-800 title-font leading-none'>
            18
          </span>
        </div>
        <div class='flex-grow pl-6'>
          <h2 class='tracking-widest text-xs title-font font-medium text-red-500 mb-1'>
            PREMIER LEAGUE
          </h2>
          <h1 class='title-font text-xl font-medium text-gray-700 dark:text-gray-200 mb-3'>
            Manchester City vs Manchester United
          </h1>
          <h2 class='leading-relaxed mb-5 text-gray-700 dark:text-gray-300'>
            Score: 2-0
          </h2>
          <p class='leading-none mb-5 text-gray-600 dark:text-gray-400'>
            Kick-off: 12:30, Etihad Stadium
          </p>
        </div>
      </div>
    </div>
  )
}

export default Fixture
