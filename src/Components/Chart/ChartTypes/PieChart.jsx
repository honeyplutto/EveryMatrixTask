import React from 'react';
import { 
  AccumulationChartComponent, 
  AccumulationSeriesCollectionDirective, 
  AccumulationSeriesDirective, 
  AccumulationLegend, 
  PieSeries, 
  AccumulationDataLabel, 
  Inject, 
  AccumulationTooltip 
} from '@syncfusion/ej2-react-charts';
import { data } from '../ChartInfo/ChartInfo'


const PieChart = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '0.5px solid grey', padding: '10px', width: '30%'}}>
      <p style={{fontSize: '22px', fontWeight: '600', color: '#fff'}}>
        Active Medias
      </p>
      <AccumulationChartComponent
        id="pie-chart"
        legendSettings={{ visible: 10, background: 'white' }}
        height='300px'
        tooltip={{ enable: true }}
      >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Sale"
            dataSource={data}
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#fff',
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div> 
  );
};

export default PieChart;