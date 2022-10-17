/* import packages */
import React from 'react';
import { LineChart, CartesianGrid, YAxis, Line } from 'recharts';
/* import interface */
import { Line as LineProps } from './chart.interface';

const LineChartComponent = (props: LineProps) => {
  const { lineData, primaryDataKey, secondaryDataKey, width, height } = props;
  return (
    <LineChart
          width={width}
          height={height}
          data={lineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey={primaryDataKey} />
          <Line type="monotone" dataKey={secondaryDataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={primaryDataKey} stroke="#82ca9d" />
        </LineChart>
  )
}

export default LineChartComponent;
