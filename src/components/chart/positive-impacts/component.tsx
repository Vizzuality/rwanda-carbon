import React from 'react';

import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { withTooltip, Tooltip } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import { extent } from 'd3-array';
import { format } from 'd3-format';

const numberFormat = format(',.2f');

import type { ChartTypes } from 'types/positive-impacts';
const PositiveImpactsChart = withTooltip(
  ({
    data,
    width,
    height,
    type,
    margin = { top: 30, bottom: 30, left: 30, right: 30 },
    lineColor,
    value,
    preUnit,
    postUnit,
  }: ChartTypes & WithTooltipProvidedProps<number>) => {
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
      <>
        <svg width={width} height={height + 40}>
          <Group width={width + 20} height={height + 20} top={margin.top}>
            <LinePath
              data={data}
              x={(d) => xScale(d.carbonPrice) ?? 0}
              y={(d) => yScale(d[type]) ?? 0}
              stroke="rgba(0, 0, 0, 20%)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <LinePath
              data={dataFiltered}
              x={(d) => xScale(d.carbonPrice) ?? 0}
              y={(d) => yScale(d[type]) ?? 0}
              stroke={lineColor}
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
        <Tooltip
          top={yScale(label)}
          left={xScale(value)}
          style={{
            position: 'absolute',
            color: lineColor,
          }}
        >
          <p className="absolute p-2 font-bold">
            {preUnit}
            {numberFormat(label)}
            {postUnit}
          </p>
        </Tooltip>
      </>
    );
  }
);

export default PositiveImpactsChart;
