import React from 'react'

const Dropdown = ({ handleFilterChange, name, options }) => {
  console.log(options)
  return (
    <div>
      <label for={name}>{name}</label>
      <select onChange={handleFilterChange} name={name} className={name}>
        {options.map(item => (
          <option value={item.value}> {item.value} </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
