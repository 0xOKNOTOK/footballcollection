import React from 'react'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'
import TeamPlayer from '../components/TeamPlayer'

const TeamPage = () => {
  return (
    <MainComponent>
      <section class='text-gray-600 bg-white dark:bg-gray-900 body-font'>
        <div class='container  px-5 py-24 mx-auto'>
          <div class='flex flex-col text-center w-full mb-20'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Our Team
            </h1>
            <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
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

export default TeamPage
