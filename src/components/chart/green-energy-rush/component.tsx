import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';
import { Pattern, PatternLines } from '@visx/pattern';
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
  const innerHeight = height - margin.bottom - margin.top;

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
  const baseline = Math.min(...data.map((d) => d.present));
  const yScale = scaleLinear({
    domain: [50, 100],
    range: [innerHeight, 0],
  });

  const colorScale = scaleOrdinal({
    domain: keys,
    range: ['#00152E', '#47DCAF'],
  });
  return (
    <svg width={width} height={height}>
      <LinearGradient
        id="gradient"
        from="#47DCAF"
        fromOffset={0.4}
        toOffset={10}
        fromOpacity={1}
        to="#47DCAF"
        toOpacity={0}
        orientation="horizontal"
      />
      <PatternLines
        id="lines"
        height={10}
        width={10}
        stroke="#002E65"
        strokeWidth={5}
        orientation={['diagonalRightToLeft']}
      />
      <Pattern width={width} height={innerHeight} id="both">
        <rect width="100%" height="100%" fill="url('#gradient')" />
        <rect width="100%" height="100%" fill="url('#lines')" />
      </Pattern>

      <Group top={margin.top}>
        <AreaStack
          data={data}
          keys={keys}
          x={(d) => xScale(x(d.data))}
          y0={(d) => yScale(y0(d))}
          y1={(d) => yScale(y1(d))}
        >
          {({ stacks, path }) =>
            stacks.reverse().map((stack) => (
              <motion.path
                offset="expand"
                initial={{
                  opacity: 0,
                  d: path([]),
                  pathLength: stack.key === 'future' ? 0 : 1,
                  x: stack.key === 'future' ? width * 2 : 0,
                }}
                animate={{
                  opacity: 1,
                  d: path(stack),
                  pathLength: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: stack.key === 'future' ? 1.2 : 0.3,
                }}
                key={`stack-${stack.key}`}
                fill={stack.key === 'future' ? "url('#both')" : colorScale(stack.key)}
                orientation={stack.key === 'future' ? 'RightToLeft' : 'vertical'}
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
        >
          {(d) => (
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              d={d.path(data)}
              fill="transparent"
              stroke-linecap="round"
              stroke="white"
              stroke-width="3"
              orientation="leftToRight"
            />
          )}
        </LinePath>
        <LinePath data={data} x={(d) => xScale(d.year) ?? 0} y={yScale(baseline)}>
          {(d) => (
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              d={d.path(data)}
              stroke="#47DCAF"
              strokeDasharray="7 7"
              orientation="leftToRight"
            />
          )}
        </LinePath>
        <HtmlLabel
          x={width - 24}
          y={yScale(usual) - 10}
          horizontalAnchor="end"
          verticalAnchor={'middle'}
          showAnchorLine={false}
        >
          <p
            style={{ width: innerWidth }}
            className="flex items-center justify-end text-xs text-white"
          >
            Higher target <span className="ml-2 text-base font-bold">{usual}</span>
          </p>
        </HtmlLabel>
        <HtmlLabel
          x={width - 24}
          y={yScale(target)}
          horizontalAnchor="end"
          verticalAnchor="start"
          showAnchorLine={false}
        >
          <p
            style={{ width: innerWidth }}
            className="flex items-center justify-end text-xs text-white"
          >
            Lower target <span className="ml-2 text-base font-bold">{target}</span>
          </p>
        </HtmlLabel>
        <HtmlLabel
          x={width - 24}
          y={yScale(baseline)}
          horizontalAnchor="end"
          verticalAnchor="end"
          showAnchorLine={false}
        >
          <p
            style={{ width: innerWidth }}
            className="flex items-center justify-end text-xs text-white"
          >
            Baseline <span className="ml-2 text-base font-bold">{baseline}</span>
          </p>
        </HtmlLabel>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
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
                [2020, 2030, 2040, 2050].includes(Number(p.formattedValue)) && (
                  <Text {...p} x={x} fill="white" fontSize={12}>
                    {p.formattedValue}
                  </Text>
                )
              );
            }}
          />

          <AxisLeft
            tickComponent={(p) => {
              return (
                [60, 70, 80, 90].includes(Number(p.formattedValue)) && (
                  <Text {...p} dy={-5} fill="#5BCEFB" fontSize={12}>
                    {p.formattedValue}
                  </Text>
                )
              );
            }}
            orientation="right"
            hideZero
            scale={yScale}
            left={40}
            hideAxisLine
            hideTicks
          />
        </motion.g>
      </Group>
    </svg>
  );
};

export default Chart;
