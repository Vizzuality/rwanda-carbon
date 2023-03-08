import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { PatternLines } from '@visx/pattern';
import { scaleLinear, scaleOrdinal } from '@visx/scale';
import { AreaStack, LinePath } from '@visx/shape';
import { Text } from '@visx/text';
import { extent } from 'd3-array';
import { format } from 'd3-format';
import { motion } from 'framer-motion';

const getXValue = (x, width) => {
  if (x > 0 && x < width) return x;
  if (x === 0) return 20;
  if (x === width) return `${x - 20}`;
};
type MarginType = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type AreaData = {
  year: number;
  present: number;
  future: number;
};

interface ChartDataTypes {
  data: AreaData[];
  width: number;
  height: number;
  margin?: MarginType;
}

const Chart = ({
  data,
  width,
  height,
  margin = { top: 0, bottom: 0, left: 0, right: 0 },
}: ChartDataTypes) => {
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

  const target = Math.max(...data.map((d) => d.present));
  const usual = target + Math.max(...data.map((d) => d.future));
  const yScale = scaleLinear({
    domain: [0, usual * 1.5],
    range: [innerHeight, 0],
  });

  const colorScale = scaleOrdinal({
    domain: keys,
    range: ['#00152E', '#47DCAF'],
  });

  return (
    <svg width={width} height={height}>
      <PatternLines
        id="lines"
        height={15}
        width={15}
        stroke="#47DCAF"
        background="#002E65"
        strokeWidth={3}
        orientation={['diagonalRightToLeft']}
      />
      <Group top={margin.top}>
        <AreaStack
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
                fill={stack.key === 'future' ? "url('#lines')" : colorScale(stack.key)}
              />
            ))
          }
        </AreaStack>
        <LinePath
          data={data}
          x={(d) => xScale(d.year) ?? 0}
          y={(d) => yScale(d.present) ?? 0}
          stroke="white"
          strokeWidth={3}
        />
        <HtmlLabel
          x={width - 20}
          y={yScale(usual)}
          horizontalAnchor="end"
          verticalAnchor={'middle'}
          showAnchorLine={false}
        >
          <p className="block w-[110px] items-center text-xs text-white">
            Usual business <span className="text-base font-bold">{usual}</span>
          </p>
        </HtmlLabel>
        <HtmlLabel
          x={width - 20}
          y={yScale(target) + 70}
          horizontalAnchor="end"
          verticalAnchor="start"
          showAnchorLine={false}
        >
          <p className="flex items-center text-xs text-white">
            Target <span className="ml-2 text-base font-bold">{target}</span>
          </p>
        </HtmlLabel>
        <AxisBottom
          hideAxisLine
          hideTicks
          hideZero
          scale={xScale}
          top={innerHeight - 40}
          tickFormat={format('d')}
          tickComponent={(p) => {
            const x = getXValue(p.x, width);
            return (
              [2010, 2020, 2030, 2040, 2050].includes(Number(p.formattedValue)) && (
                <Text {...p} x={x} fill="white" fontSize={12}>
                  {p.formattedValue}
                </Text>
              )
            );
          }}
        />
        {/* stacked bar */}
        <AxisLeft
          tickComponent={(p) => {
            return (
              [5, 10, 15, 20, 25].includes(Number(p.formattedValue)) && (
                <Text {...p} dy={-5} fill="#5BCEFB" fontSize={12}>
                  {p.formattedValue}
                </Text>
              )
            );
          }}
          orientation="right"
          hideZero
          scale={yScale}
          left={60}
          hideAxisLine
          hideTicks
        />
      </Group>
    </svg>
  );
};

export default Chart;
