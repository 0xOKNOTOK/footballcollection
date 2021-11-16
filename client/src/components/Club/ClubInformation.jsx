import React from 'react'
import ClubInformationCard from './ClubInformationCard'

const ClubInformation = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container w-full px-1 py-10 mx-auto flex items-align-center justify-center flex-wrap'>
        <div className='flex flex-wrap -m-4'>
          <ClubInformationCard />
        </div>
      </div>
    </section>
  )
}

export default ClubInformation
