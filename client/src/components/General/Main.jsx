import React from 'react'

const MainComponent = ({ children }) => {
  return (
    <main className='h-screen bg-gray-100 dark:bg-gray-900'>{children}</main>
  )
}

export default MainComponent
