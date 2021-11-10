import React, { useState, useEffect } from 'react'
import { Router, Switch } from 'react-router'
import Navigation from './components/Navigation'

import LandingPage from './pages/LandingPage'

const App = () => {
  const [searchBar, setSearchBar] = useState('')

  const handleSearchClick = e => {
    e.preventDefault()
    setSearchBar(e.target.value)
  }
  return (
    <div>
      <Navigation handleSearchClick={handleSearchClick} />
      <LandingPage />
    </div>
  )
}

export default App
