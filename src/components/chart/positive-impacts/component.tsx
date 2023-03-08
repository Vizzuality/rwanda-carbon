import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { extent } from 'd3-array';
import { format } from 'd3-format';

const numberFormat = format(',.2f');

import type { ChartTypes } from './types';
const PositiveImpactsChart = ({
  data,
  width,
  height,
  type,
  margin = { top: 0, bottom: 0, left: 0, right: 0 },
  lineColor,
  value,
  preUnit,
  postUnit,
}: ChartTypes) => {
  // set dimensions
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.bottom - margin.top;

  // create accessor functions
  const x = (d) => d.carbonPrice;
  const dataFiltered = data.filter((d) => d.carbonPrice <= value);
  // create scales
  const xScale = scaleLinear({
    range: [margin.left, innerWidth + margin.right],
    domain: extent(data, x),
  });

  const yMax = Math.max(...data.map((d) => d[type]));

  const yScale = scaleLinear({
    domain: [0, yMax],
    range: [innerHeight, 0],
  });

  const label = dataFiltered[dataFiltered.length - 1]?.[type];
  const strokeWidth = 8;

  return (
    <svg width={width} height={height + 40}>
      <Group width={width + 20} height={height + 20} top={margin.top}>
        <LinePath
          data={dataFiltered}
          x={(d) => xScale(d.carbonPrice) ?? 0}
          y={(d) => yScale(d[type]) ?? 0}
          stroke={lineColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <HtmlLabel
          x={xScale(value)}
          y={yScale(label)}
          horizontalAnchor="start"
          verticalAnchor="start"
          showAnchorLine={false}
        >
          <p style={{ color: lineColor }} className="text-s flex text-base font-bold">
            {preUnit}
            {numberFormat(label)}
            {postUnit}
          </p>
        </HtmlLabel>
        <LinePath
          data={data}
          x={(d) => xScale(d.carbonPrice) ?? 0}
          y={(d) => yScale(d[type]) ?? 0}
          stroke="rgba(0, 0, 0, 20%)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <AxisBottom
          top={innerHeight + 5}
          scale={xScale}
          hideTicks
          hideZero
          stroke="black"
          orientation="bottom"
          numTicks={0}
        />
      </Group>
    </svg>
  );
};

export default PositiveImpactsChart;
