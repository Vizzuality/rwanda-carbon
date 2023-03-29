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
import { AnimatePresence, motion } from 'framer-motion';

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
  intervention: number;
  business_as_usual: number;
  historical?: number;
};

interface ChartDataTypes {
  data: AreaData[];
  width: number;
  height: number;
  margin?: MarginType;
}

const initialIntervention = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    delay: 0.1,
  },
};
const initialBusiness = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 5,
    delay: 10,
  },
};

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

  const keys = ['business_as_usual', 'intervention'];

  // create scales
  const xScale = scaleLinear({
    range: [margin.left, innerWidth + margin.left],
    domain: extent(data, x),
  });

  const target = Math.max(...data.map((d) => d.business_as_usual));
  const businessWithIntervention = target + Math.max(...data.map((d) => d.intervention));
  const yScale = scaleLinear({
    domain: [0, businessWithIntervention * 1.2],
    range: [innerHeight, 0],
  });

  const colorScale = scaleOrdinal({
    domain: keys,
    range: ['#00152E', '#47DCAF'],
  });
  const D =
    LinePath({
      data,
      x: (d) => xScale(d.year),
      y: (d) => yScale(d.business_as_usual),
    }) || '';

  return (
    <svg width={width} height={height}>
      <AnimatePresence>
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
            orientation="leftToRight"
          >
            {({ stacks, path }) =>
              stacks.reverse().map((stack) => {
                return (
                  <motion.path
                    d={path(stack)}
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                      x: stack.key === 'intervention' ? -(width * 2) : 0,
                      y: stack.key === 'intervention' ? height * 2 : 0,
                    }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    transition={{ delay: 0.35, duration: stack.key === 'intervention' ? 3.15 : 0 }}
                    key={`stack-${stack.key}`}
                    fill={stack.key === 'intervention' ? "url('#lines')" : colorScale(stack.key)}
                    orientation="rightToLeft"
                  />
                );
              })
            }
          </AreaStack>
          <LinePath
            data={data}
            x={(d) => xScale(d.year)}
            y={(d) => yScale(d.business_as_usual)}
            stroke="white"
            strokeWidth={3}
            orientation={'leftToRight'}
          >
            {(d) => (
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.7, duration: 3 }}
                d={d.path(data)}
                fill="transparent"
                stroke-linecap="round"
                stroke="white"
                stroke-width="3"
                orientation="leftToRight"
              />
            )}
          </LinePath>
          <HtmlLabel
            x={width - 20}
            y={yScale(businessWithIntervention)}
            horizontalAnchor="end"
            verticalAnchor="end"
            showAnchorLine={false}
          >
            <p
              style={{ width: innerWidth }}
              className="flex items-center justify-end text-xs text-white"
            >
              Business as usual{' '}
              <span className="ml-2 text-base font-bold">{businessWithIntervention}</span>
            </p>
          </HtmlLabel>
          <HtmlLabel
            x={width - 20}
            y={yScale(target) + 40}
            horizontalAnchor="end"
            verticalAnchor="start"
            showAnchorLine={false}
          >
            <p className="flex items-center text-xs text-white">
              Target <span className="ml-2 text-base font-bold">{target}</span>
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
              numTicks={6}
              tickComponent={(p) => {
                const x = getXValue(p.x, width);
                return (
                  <Text {...p} x={x - 20} fill="white" fontSize={12}>
                    {p.formattedValue}
                  </Text>
                );
              }}
            />
            <AxisLeft
              tickComponent={(p) => {
                return (
                  Number(p.formattedValue) < businessWithIntervention && (
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
              numTicks={5}
            />
          </motion.g>
        </Group>
      </AnimatePresence>
    </svg>
  );
};

export default Chart;
