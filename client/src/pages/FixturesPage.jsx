import React from 'react'
import Fixture from '../components/Fixtures/Fixture'
import Footer from '../components/General/Footer'
import MainComponent from '../components/General/Main'

const FixturesPage = () => {
  return (
    <MainComponent>
      <section className='h-full text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap content-center justify-center'>
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
