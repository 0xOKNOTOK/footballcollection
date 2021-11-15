import React from 'react'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'

import TeamsCard from '../components/Teams/TeamsCard'
import TeamsPosition from '../components/Teams/TeamsPosition'

const TeamsPage = () => {
  return (
    <MainComponent>
      <section className='text-gray-600 bg-white dark:bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex-col align-center justify-items-center flex flex-wrap'>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
          <TeamsPosition>
            <TeamsCard />
          </TeamsPosition>
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default TeamsPage
