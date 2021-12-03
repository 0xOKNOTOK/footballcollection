import React, { useEffect, useState } from 'react'
import { TableProvider } from '../../hooks/tableDataContext'

const TableContainer = props => {
  const [TableData, setTableData] = useState({})
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    fetch('/api/tables/')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setTableData(result)
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
  } else if (Object.keys(TableData).length === 0) {
    return <div> Loading...</div>
  } else {
    return (
      <div>
        <TableProvider value={TableData}>{props.children}</TableProvider>
      </div>
    )
  }
}

export default TableContainer
