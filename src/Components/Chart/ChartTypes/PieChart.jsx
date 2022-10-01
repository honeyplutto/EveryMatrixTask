import React, { useState } from 'react'
import Chart from "react-apexcharts";

const PieChart = () => {
    const [state, setState] = useState(
        {
            options: {},
            series: [44, 55, 41, 17, 15],
            labels: ['A', 'B', 'C', 'D', 'E']
        }
    )

    return (
        <div>
            <Chart 
                {...state}
                type='donut'
                width="400"
            />
        </div>
    )
}

export default PieChart