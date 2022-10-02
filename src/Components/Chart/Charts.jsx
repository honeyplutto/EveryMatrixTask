import React from 'react'
import BarChart from './ChartTypes/BarChart'
import PieChart from './ChartTypes/PieChart'
import Map from './Map'

const Charts = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', background: '#171717', height: '300px'}}>
        <BarChart />
        <PieChart />
        <Map />
    </div>
  )
}

export default Charts