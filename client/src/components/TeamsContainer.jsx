import React, { useEffect, useState } from 'react'
import { TeamsProvider } from '../hooks/dataContext'
import axios from 'axios'

const TeamsContainer = props => {
  const [clubData, setClubData] = useState({})
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    fetch('/api/teams/league/13')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setClubData(result)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <TeamsProvider>{props.children}</TeamsProvider>
      </div>
    )
  }
}

export default TeamsContainer
