import React from 'react'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'
import TeamPlayer from '../components/TeamPlayer'

const ClubPage = () => {
  return (
    <MainComponent>
      <section class='text-gray-600  dark:text-gray-300 bg-white dark:bg-gray-900 body-font'>
        <div class='container  px-5 py-24 mx-auto'>
          <div class='flex flex-col text-center w-full mb-20'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
              Manchester City Football Club
              <p class='text-xl text-blue-300 inline'>MCI</p>
            </h1>
            <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Formed in 1894 Manchester City Football Club played at Maine Road
              until 2003 when they moved to their new home The City of
              Manchester Stadium.
            </p>
          </div>
          <div class='flex flex-wrap -m-2'>
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
            <TeamPlayer />
          </div>
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default ClubPage
