import React from 'react'
import playerImage from '../assets/kevin_de_bruyne.png'

const TeamPlayer = () => {
  return (
    <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
      <div class='h-full flex items-center border-gray-700 border p-4 rounded-lg'>
        <img
          alt='player'
          class='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
          src={playerImage}
        />
        <div class='flex-grow'>
          <h2 class='text-gray-800 dark:text-gray-300 title-font font-medium'>
            Kevin De Bruyne
          </h2>
          <p class='text-gray-500 font-bold '>17 - Midfielder</p>
        </div>
      </div>
    </div>
  )
}

export default TeamPlayer
