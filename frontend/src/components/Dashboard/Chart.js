import React from "react";
import { ResponsivePie } from '@nivo/pie';
const data = [
  {
    id: 'Yes',
    value: 3,
    color: '#fff',
  },
  {
    id: 'No',
    value: 6,
    color: '#555',
  },
];

const Chart = () => {
  
  return (
    <div>
    <div style={{ height: '50px' }}>
      <ResponsivePie
        data={data}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />

      
    </div>
    <div style={{border:'1px solid red',width:'20vw',height:'10vw'}}>
      <div style={{border:'1px solid red',width:'9.9vw',height:'10vw',float:'right'}}></div>
      <div style={{border:'1px solid red',width:'9.9vw',height:'10vw',float:'left'}}>
      <ResponsivePie
        data={data}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
      </div>

      </div>
    </div>
  )
}

export default Chart;
