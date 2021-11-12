import React from 'react'

const TeamsCard = () => {
  return (
    <div class='flex-grow w-screen md:pl-8 pl-6 flex sm:items-center items-start flex-row'>
      <div class='flex-shrink-0 w-10 h-10 bg-blue-400 text-blue-500 rounded-full inline-flex items-center justify-center'></div>
      <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
        <h2 class='font-medium title-font text-gray-900 dark:text-gray-200 mb-1 text-xl'>
          Manchester City
        </h2>
      </div>
    </div>
  )
}

export default TeamsCard
