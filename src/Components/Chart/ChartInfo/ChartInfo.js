const lineChartData = [
    [
    { x: new Date(2005, 0, 1), y: 40 },
    { x: new Date(2006, 0, 1), y: 50 },
    { x: new Date(2007, 0, 1), y: 0 },
    { x: new Date(2008, 0, 1), y: -45 },
    { x: new Date(2009, 0, 1), y: -20 },
    { x: new Date(2010, 0, 1), y: 40 },
    { x: new Date(2011, 0, 1), y: 55 },
    ],
    [
    { x: new Date(2005, 0, 1), y: 20 },
    { x: new Date(2006, 0, 1), y: 58 },
    { x: new Date(2007, 0, 1), y: 18 },
    { x: new Date(2008, 0, 1), y: -40 },
    { x: new Date(2009, 0, 1), y: -35 },
    { x: new Date(2010, 0, 1), y: 22 },
    { x: new Date(2011, 0, 1), y: 52 },
    ],

    [
    { x: new Date(2005, 0, 1), y: -35 },
    { x: new Date(2006, 0, 1), y: 25 },
    { x: new Date(2007, 0, 1), y: 50 },
    { x: new Date(2008, 0, 1), y: 19 },
    { x: new Date(2009, 0, 1), y: -40 },
    { x: new Date(2010, 0, 1), y: -35 },
    { x: new Date(2011, 0, 1), y: 20 },
    ],
];

const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Clicks',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'Page View',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'Sign ups',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];

const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
};

const data = [
  { 'x': '', y: 28, text: '' },
  { 'x': '', y: 23, text: '' },
  { 'x': '', y: 49, text: '' },
  
]

export {
    lineCustomSeries,
    LinePrimaryXAxis,
    data
}