import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ClubInformation from '../components/Club/ClubInformationCard'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'
import TeamPlayer from '../components/Club/TeamPlayer'
import TeamsContext from '../hooks/dataContext'

const ClubPage = () => {
  const clubData = useContext(TeamsContext)
  console.log(clubData)
  return (
    <MainComponent>
      <section className='text-gray-600  dark:text-gray-300 bg-white dark:bg-gray-900 body-font'>
        <div className='container  px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
              {clubData.name}
              <p className='text-sm sm:text-xl text-blue-300 inline'>
                {' '}
                {clubData.abbreviation}
              </p>
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Formed in 1894 Manchester City Football Club played at Maine Road
              until 2003 when they moved to their new home The City of
              Manchester Stadium.
            </p>
            <ClubInformation />
          </div>
          <div className='mt-8 mb-8'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
              Goalkeepers
            </h1>
          </div>
          <div className='flex flex-wrap -m-2'>
            {!clubData.players ? (
              <h1>Loading...</h1>
            ) : (
              clubData.players
                .filter(player => player.position === 'Goalkeeper')
                .map(player => (
                  <TeamPlayer
                    name={player.name}
                    position={player.position}
                    number={player.number}
                    nationality={player.nationality}
                  />
                ))
            )}
          </div>
          <div className='mt-8 mb-8'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
              Defenders
            </h1>
          </div>
          <div className='flex flex-wrap -m-2'>
            {!clubData.players ? (
              <h1>Loading...</h1>
            ) : (
              clubData.players
                .filter(player => player.position === 'Defender')
                .map(player => (
                  <TeamPlayer
                    name={player.name}
                    position={player.position}
                    number={player.number}
                    nationality={player.nationality}
                  />
                ))
            )}
          </div>
          <div className='mt-8 mb-8'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
              Midfielders
            </h1>
          </div>
          <div className='flex flex-wrap -m-2'>
            {!clubData.players ? (
              <h1>Loading...</h1>
            ) : (
              clubData.players
                .filter(player => player.position === 'Midfielder')
                .map(player => (
                  <TeamPlayer
                    name={player.name}
                    position={player.position}
                    number={player.number}
                    nationality={player.nationality}
                  />
                ))
            )}
          </div>
          <div className='mt-8 mb-8'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
              Forwards
            </h1>
          </div>
          <div className='flex flex-wrap -m-2'>
            {!clubData.players ? (
              <h1>Loading...</h1>
            ) : (
              clubData.players
                .filter(player => player.position === 'Forward')
                .map(player => (
                  <TeamPlayer
                    name={player.name}
                    position={player.position}
                    number={player.number}
                    nationality={player.nationality}
                  />
                ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default ClubPage
