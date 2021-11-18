import React from 'react'

const TableSkeleton = props => {
  return (
    <table className='w-52 mx-auto text-align-center'>
      <tr>
        <th className='px-1'>Pos</th>
        <th className='px-2'>Badge</th>
        <th className='sm:pr-56 pr-10'>Club</th>
        <th className='px-2'>MP</th>
        <th className='px-2'>W</th>
        <th className='px-2'>D</th>
        <th className='px-2'>L</th>
        <th className='px-2 sm:table-cell hidden'>GF</th>
        <th className='px-2 sm:table-cell hidden'>GA</th>
        <th className='px-2  sm:table-cell hidden'>GD</th>
        <th className='px-2'>Pts</th>
        <th className='sm:inline  hidden'>Form</th>
      </tr>
      {props.children}
    </table>
  )
}

export default TableSkeleton
