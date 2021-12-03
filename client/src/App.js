import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/General/Navigation'

import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import StatsPage from './pages/StatsPage'
import FixturesPage from './pages/FixturesPage'
import TablesPage from './pages/TablesPage'
import ClubPage from './pages/ClubPage'
import FixturesContainer from './components/HooksContainers/TableContainer'

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
          <Route path='/stats' element={<StatsPage />} />
          <Route path='/fixtures' element={<FixturesPage />} />
          <Route
            path='/tables'
            element={
              <FixturesContainer>
                <TablesPage />
              </FixturesContainer>
            }
          />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/clubpage' element={<ClubPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
