import React from 'react'

const TableSkeleton = props => {
  return (
    <table className='w-52 mx-auto text-align-center'>
      <tr>
        <th className='px-1'>Pos</th>
        <th className='px-2'>Badge</th>
        <th className='pr-56'>Club</th>
        <th className='px-2'>MP</th>
        <th className='px-2'>W</th>
        <th className='px-2'>D</th>
        <th className='px-2'>L</th>
        <th className='px-2'>GF</th>
        <th className='px-2'>GA</th>
        <th className='px-2'>GD</th>
        <th className='px-2'>Pts</th>
        <th className='px-8'>Form</th>
      </tr>
      {props.children}
    </table>
  )
}

export default TableSkeleton
