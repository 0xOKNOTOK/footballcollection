import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import StatsPage from './pages/StatsPage'
import FixturesPage from './pages/FixturesPage'
import TeamsPage from './pages/TeamsPage'
import ClubPage from './pages/ClubPage'
import TeamsContainer from './components/TeamsContainer'

const App = () => {
  const [searchBar, setSearchBar] = useState('')

  const handleSearchChange = e => {
    e.preventDefault()
    setSearchBar(e.target.value)
    console.log(searchBar)
  }
  return (
    <div>
      <Navigation handleSearchChange={handleSearchChange} />
      <TeamsContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/stats' element={<StatsPage />} />
            <Route path='/fixtures' element={<FixturesPage />} />
            <Route path='/teams' element={<TeamsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/clubpage' element={<ClubPage />} />
          </Routes>
        </BrowserRouter>
      </TeamsContainer>
    </div>
  )
}

export default App
