import React from 'react';
import Mock from '@vx/mock-data';
import Curve from '@vx/curve';
import SimpleLineChart from './demos/charts/SimpleLineChart';
import SimpleAreaChart from './demos/charts/SimpleAreaChart';

export default function Demo() {
  const data1 = Mock.genDateValue(20);
  const data2 = Mock.genDateValue(20);

  const width = 800;
  const height = 400;
  const margin = {
    top: 20,
    bottom: 30,
    left: 50,
    right: 50,
  };

  return (
    <div>
      <SimpleLineChart
        width={width}
        height={height}
        margin={margin}
        dataset={[{
          data: data1,
          chart: {
            points: true,
            stroke: {
              color: '#6A7DD3',
              width: 2,
            },
          }
        }, {
          data: data2,
          chart: {
            curve: Curve.cardinal,
            stroke: {
              width: 2,
              color: '#5A9C57',
              dasharray: "5,5",
            }
          }
        }]}
      />

      <SimpleAreaChart
        width={width}
        height={height}
        margin={margin}
      />
    </div>
  );
}