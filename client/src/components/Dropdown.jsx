import React from 'react'

const Dropdown = ({ handleFilterChange }) => {
  return (
    <div>
      <label for='year'>Year</label>

      <select onChange={handleFilterChange} name='year' className='year'>
        <option value='2021/22'>2021/22</option>
        <option value='2020/21'>2020/21</option>
        <option value='2019/20'>2019/20</option>
        <option value='2018/19'>2018/19</option>
        <option value='2017/18'>2017/18</option>
      </select>
    </div>
  )
}

export default Dropdown
