import React from 'react'

const Dropdown = ({ handleFilterChange, name }) => {
  return (
    <div>
      <label for={name}>{name}</label>

      <select onChange={handleFilterChange} name={name} className={name}>
        <option value='PremierLeague'>2021/22</option>
        <option value='EFLChampionship'>2020/21</option>
      </select>
    </div>
  )
}

export default Dropdown
