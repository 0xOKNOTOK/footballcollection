import React from 'react'

const TeamsCard = () => {
  return (
    <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
      <div class='flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center'>
        <svg
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          class='w-12 h-12'
          viewBox='0 0 24 24'
        >
          <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
        </svg>
      </div>
      <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
        <h2 class='font-medium title-font text-gray-900 dark:text-gray-200 mb-1 text-xl'>
          Chelsea
        </h2>
      </div>
    </div>
  )
}

export default TeamsCard
