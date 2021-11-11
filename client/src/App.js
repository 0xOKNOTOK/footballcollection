import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import StatisticsPage from './pages/StatisticsPage'
import FixturesPage from './pages/FixturesPage'
import TeamPage from './pages/TeamPage'

const App = () => {
  const [searchBar, setSearchBar] = useState('')

  const handleSearchChange = e => {
    e.preventDefault()
    setSearchBar(e.target.value)
  }
  return (
    <div>
      <Navigation handleSearchChange={handleSearchChange} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/fixtures' element={<FixturesPage />} />
          <Route path='/teams' element={<TeamPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/stats' element={<StatisticsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
