import React from 'react'
import Player from './Player'

const ClubPlayers = ({ team, position }) => {
  return (
    <div>
      <div className='mt-8 mb-8'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100'>
          {position + 's'}
        </h1>
      </div>
      <div className='flex flex-wrap -m-2'>
        {!team.players ? (
          <h1>Loading...</h1>
        ) : (
          team.players
            .filter(player => player.position === position)
            .map(player => (
              <Player
                photo={player.photo}
                name={player.name}
                position={player.position}
                number={player.number}
                nationality={player.nationality}
              />
            ))
        )}
      </div>
    </div>
  )
}

export default ClubPlayers
