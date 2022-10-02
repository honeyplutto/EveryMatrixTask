import React from 'react';
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject, 
  LineSeries, 
  DateTime, 
  Legend, 
  Tooltip 
} from '@syncfusion/ej2-react-charts';
import { 
  lineCustomSeries,
  LinePrimaryXAxis 
} from '../ChartInfo/ChartInfo'
import ChartSelect from '../ChartSelect'

const LineChart = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: '30%', padding: '5px',  border: '1px solid grey'}}>
      <ChartSelect />
      <ChartComponent
        id="line-chart"
        height="300px"
        primaryXAxis={LinePrimaryXAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>  
  );
};

export default LineChart;