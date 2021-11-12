import React from 'react'

const TeamsPosition = ({ children }) => {
  return (
    <div class='flex justify-center items-center  pt-10 pb-20 md:w-1/3 mx-auto'>
      <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm'>
        1
      </div>
      {children}
    </div>
  )
}

export default TeamsPosition
