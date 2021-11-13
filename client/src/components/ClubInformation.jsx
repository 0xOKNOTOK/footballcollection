import React from 'react'
import ClubInformationCard from './ClubInformationCard'

const ClubInformation = () => {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container w-full px-1 py-10 mx-auto flex items-align-center justify-center flex-wrap'>
        <div class='flex flex-wrap -m-4'>
          <ClubInformationCard />
          <ClubInformationCard />
          <ClubInformationCard />
        </div>
      </div>
    </section>
  )
}

export default ClubInformation
