import React from 'react'
import BasicTable from './Table'
import { name } from './TableInfo'

const Tables = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      {name.map(str => (
        <BasicTable name={str}/>
      ))}
    </div>
  )
}

export default Tables