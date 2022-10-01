import React from 'react'
import BarChart from './ChartTypes/BarChart'
import PieChart from './ChartTypes/PieChart'

const Charts = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <BarChart />
        <PieChart />
    </div>
  )
}

export default Charts