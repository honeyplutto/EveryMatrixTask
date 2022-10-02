import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import ChartSelect from "./ChartSelect"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {
  return (
        <div style={{flex: '30%' ,border: '0.5px solid grey', padding: '10px'}}>
            <ChartSelect />
            <ComposableMap style={{width: '300px'}}>
            <Geographies geography={geoUrl} >
                {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} style={{
                        hover: {
                            fill: '#c1c1c1',
                            outline: 'none'
                        }
                    }} />
                ))
                }
            </Geographies>
            </ComposableMap>

        </div>
  )
}
