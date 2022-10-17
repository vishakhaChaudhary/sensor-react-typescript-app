/* import packages */
import React from 'react';
import { AreaChart, CartesianGrid, YAxis, Area } from 'recharts';
/* import interface */
import { Area as AreaProps } from './chart.interface';

const AreaChartComponent = (props: AreaProps) => {
  const { areaData, primaryDataKey, secondaryDataKey, width, height } = props;
  return (
    <>
        <AreaChart
          width={width}
          height={height}
          data={areaData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey={primaryDataKey} />
          <Area type="monotone" dataKey={secondaryDataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey={primaryDataKey} stroke="#82ca9d" />
        </AreaChart>
    </>
  )
}

export default AreaChartComponent;
