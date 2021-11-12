import React from 'react'

const TeamsPosition = ({ children }) => {
  return (
    <div class='flex justify-center items-center  pt-10 pb-20 md:w-2/3 mx-auto'>
      <div class='h-1 w-6 flex items-center justify-center'>
        <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
        <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm'>
          1
        </div>
        {children}
      </div>
    </div>
  )
}

export default TeamsPosition
