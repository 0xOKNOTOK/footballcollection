import React from 'react'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <main>
      <section class='h-screen bg-gray-100 text-gray-400 dark:bg-gray-900 body-font flex items-center flex-row'>
        <div class=' container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div class='lg:w-screen md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 class='title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-800 dark:text-white'>
              Football, visualised.
            </h1>
            <p class='mb-8 text-gray-600 dark:text-gray-300 leading-relaxed'>
              Football Collection (FC) aims to provide up-to-date statistics on
              all the latest EPL and UCL fixtures, players and teams in an easy
              to digest format.
            </p>
            <div class='flex justify-center'>
              <button class='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'>
                View Stats
              </button>
              <button class='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                Contact Me
              </button>
            </div>
          </div>
          <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              class='object-cover object-center rounded'
              alt='hero'
              src='/images/landing_page_image.png'
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default LandingPage
