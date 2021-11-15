import React from 'react'

const ClubInformationCard = () => {
  return (
    <div className='p-1 lg:w-1/3 md:w-full'>
      <div className='flex border-2 rounded-lg border-gray-200 border-opacity-50 p-3 sm:flex-row flex-col'>
        <div className='w-14 h-14 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
          <svg
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
          </svg>
        </div>
        <div className='flex-grow '>
          <h2 className='text-gray-900 text-md font-medium mb-3'>Manager</h2>
          <p className='leading-relaxed text-base'>Josep Guardiola</p>
        </div>
      </div>
    </div>
  )
}

export default ClubInformationCard
