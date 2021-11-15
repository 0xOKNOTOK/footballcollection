import React from 'react'
import Fixture from '../components/Fixtures/Fixture'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'

const FixturesPage = () => {
  return (
    <MainComponent>
      <section className='h-screen text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap content-center justify-center -mx-4 -my-8'>
            <Fixture />
            <Fixture />
            <Fixture />
            <Fixture />
          </div>
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default FixturesPage
