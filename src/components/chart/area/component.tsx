import React from 'react';

import { AxisBottom, AxisLeft } from '@visx/axis';
import { PatternLines } from '@visx/pattern';
import { scaleLinear, scaleOrdinal } from '@visx/scale';
import { AreaStack, LinePath } from '@visx/shape';
import { Text } from '@visx/text';
import { extent } from 'd3-array';
import { format } from 'd3-format';
import { motion } from 'framer-motion';

const AreaChart = ({ data, width, height, margin = { top: 0, bottom: 0, left: 0, right: 0 } }) => {
  // set dimensions
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // create accessor functions
  const x = (d) => d.year;
  const y0 = (d) => d[0];
  const y1 = (d) => d[1];

  const keys = Object.keys(data[0]).filter((key) => key !== 'year');

  // create scales
  const xScale = scaleLinear({
    range: [margin.left, innerWidth + margin.left],
    domain: extent(data, x),
  });

  const yScale = scaleLinear({
    domain: [0, 25],
    range: [innerHeight, 0],
  });

  const colorScale = scaleOrdinal({
    domain: keys,
    range: ['#47DCAF', '#00152E'],
  });
  // return chart

  const accessors = {
    xAccessor: (d) => xScale(d.year),
    yAccessor: (d) => yScale(d.present),
  };
  return (
    <svg width={width} height={height}>
      <PatternLines
        id="lines"
        height={5}
        width={5}
        stroke={'black'}
        background="#47DCAF"
        strokeWidth={1}
        orientation={['diagonal']}
      />
      <AreaStack
        top={margin.top}
        left={margin.left}
        data={data}
        keys={keys}
        x={(d) => xScale(x(d.data))}
        y0={(d) => yScale(y0(d))}
        y1={(d) => yScale(y1(d))}
      >
        {({ stacks, path }) =>
          stacks.map((stack) => (
            <motion.path
              initial={false}
              animate={{ d: path(stack) }}
              key={`stack-${stack.key}`}
              stroke="black"
              strokeWidth={0.5}
              fill={stack.key === 'future' ? "url('#lines')" : colorScale(stack.key)}
            />
          ))
        }
      </AreaStack>
      <LinePath
        data={data}
        stroke="white"
        fill="white"
        strokeWidth={3}
        strokeOpacity={1}
        {...accessors}
      />
      <AxisBottom
        hideAxisLine
        hideTicks
        hideZero
        scale={xScale}
        top={innerHeight - 40}
        tickFormat={format('d')}
        tickComponent={(p) => {
          return (
            <Text {...p} dy={-5} fill="white">
              {p.formattedValue}
            </Text>
          );
        }}
      />
      <AxisLeft
        tickComponent={(p) => {
          return (
            <Text {...p} dy={-5} fill="white">
              {p.formattedValue}
            </Text>
          );
        }}
        orientation="right"
        numTicks={6}
        hideZero
        scale={yScale}
        left={60}
        hideAxisLine
        hideTicks
      />
    </svg>
  );
};

export default AreaChart;
