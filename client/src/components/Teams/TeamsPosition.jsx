import React from 'react'

const TeamsPosition = ({ children, position }) => {
  return (
    <div className='flex justify-center items-center  pt-10 pb-20 md:w-1/3 mx-auto'>
      <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm'>
        {position}
      </div>
      {children}
    </div>
  )
}

export default TeamsPosition
