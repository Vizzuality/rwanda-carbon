import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { AxisLeft } from '@visx/axis';
import { GridRadial } from '@visx/grid';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Line, Circle } from '@visx/shape';
import { format } from 'd3-format';
import { motion, AnimatePresence } from 'framer-motion';

type MarginType = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type RadialData = {
  shortLabel: string;
  label: string;
  africa: number;
  rwanda: number;
};

interface ChartDataTypes {
  data: RadialData[];
  width: number;
  height: number;
  margin?: MarginType;
}
const numberFormat = format(',.0f');
const Chart = ({
  data,
  width,
  height,
  margin = { top: 0, bottom: 0, left: 0, right: 0 },
}: ChartDataTypes) => {
  // set dimensions
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.bottom - margin.top;

  const yMax = Math.max(...data.map((d) => d.rwanda));
  const radialScale = scaleLinear({
    domain: [0, yMax],
    range: [0, innerHeight / 2.5],
  });
  const radius = radialScale(yMax);

  const genPoints = (length: number, radius: number) => {
    const step = (Math.PI * 2) / length;
    const offsetAngleRwanda = Math.PI / 180 + 15;
    const offsetAngleAfrica = Math.PI / 180 - 10;
    const offsetAngleCategory = Math.PI / 180 - 10;
    return [...new Array(length)].map((_, i) => ({
      rwandaX: ((radius * data[i].rwanda) / yMax) * Math.sin(i * step + offsetAngleRwanda),
      rwandaY: ((radius * data[i].rwanda) / yMax) * Math.cos(i * step + offsetAngleRwanda),
      africaX: ((radius * data[i].africa) / yMax) * Math.sin(i * step + offsetAngleAfrica),
      africaY: ((radius * data[i].africa) / yMax) * Math.cos(i * step + offsetAngleAfrica),
      labelRwandaX: radius * ((data[i].rwanda + 5) / yMax) * Math.sin(i * step + offsetAngleRwanda),
      labelRwandaY: radius * ((data[i].rwanda + 5) / yMax) * Math.cos(i * step + offsetAngleRwanda),
      labelAfricaX: radius * ((data[i].africa + 5) / yMax) * Math.sin(i * step + offsetAngleAfrica),
      labelAfricaY: radius * ((data[i].africa + 5) / yMax) * Math.cos(i * step + offsetAngleAfrica),
      labelCategoryX: radius * (data[i].rwanda / yMax) * Math.sin(i * step + offsetAngleCategory),
      labelCategoryY: radius * (data[i].rwanda / yMax) * Math.cos(i * step + offsetAngleCategory),
      label: data[i].shortLabel,
    }));
  };
  const reverseYScale = radialScale.copy().range(radialScale.range().reverse());

  const points = genPoints(data.length, radius);

  const animationDelay = 1;
  const animationDuration = 0;
  return (
    <svg width={width} height={height}>
      <Group top={innerHeight / 2} left={innerWidth - innerWidth / 4}>
        <AnimatePresence>
          <GridRadial
            scale={radialScale}
            stroke="#5BCEFB"
            opacity={0.3}
            numTicks={3}
            strokeWidth={1}
          />
          <motion.g>
            <AxisLeft
              top={-height / 2.5}
              scale={reverseYScale}
              numTicks={3}
              tickStroke="none"
              stroke="transparent"
              tickComponent={(p) => {
                return (
                  <HtmlLabel {...p} x={p.x + 25} y={p.y + 10} showAnchorLine={false}>
                    <div className="rounded-3xl border border-cyan-0 border-opacity-30 bg-cobalt-0 px-2 py-0.5 text-xs text-cyan-0">
                      {p.formattedValue}
                    </div>
                  </HtmlLabel>
                );
              }}
            />
          </motion.g>
          {data.map((a, i) => (
            <g key={a.label}>
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 1,
                  type: 'spring',
                  damping: 17,
                  stiffness: 432,
                  mass: 1,
                }}
              >
                <Line
                  key={`radar-line-${a.shortLabel}`}
                  from={{ x: 0, y: 0 }}
                  to={{ x: points[i].africaX, y: points[i].africaY }}
                  stroke="#5BCEFB"
                  strokeWidth={8}
                  strokeLinecap="round"
                />
                <Line
                  key={`radar-line-${a.shortLabel}`}
                  from={{ x: 0, y: 0 }}
                  to={{ x: points[i].rwandaX, y: points[i].rwandaY }}
                  stroke="white"
                  strokeWidth={8}
                  strokeLinecap="round"
                />
              </motion.g>
              <HtmlLabel
                x={points[i].labelRwandaX}
                y={points[i].labelRwandaY}
                showAnchorLine={false}
                horizontalAnchor="middle"
                verticalAnchor="middle"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: animationDelay,
                    duration: animationDuration,
                  }}
                  className="flex rounded-full bg-cobalt-0 px-2 py-1 text-xs text-cyan-0"
                >
                  {numberFormat(a.rwanda)}
                </motion.p>
              </HtmlLabel>
              <HtmlLabel
                x={points[i].labelAfricaX}
                y={points[i].labelAfricaY}
                showAnchorLine={false}
                horizontalAnchor="middle"
                verticalAnchor="middle"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: animationDelay,
                    duration: animationDuration,
                  }}
                  className="flex rounded-full bg-cobalt-0 px-2 py-1 text-xs text-cyan-0"
                >
                  {numberFormat(a.africa)}
                </motion.p>
              </HtmlLabel>
              <HtmlLabel
                x={points[i].labelCategoryX}
                y={points[i].labelCategoryY}
                showAnchorLine={false}
                horizontalAnchor="middle"
                verticalAnchor="middle"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: animationDelay,
                    duration: animationDuration,
                  }}
                  className="flex rounded-full bg-cyan-0 px-2 py-1 text-xs text-cobalt-0"
                >
                  {a.shortLabel}
                </motion.p>
              </HtmlLabel>
            </g>
          ))}
          <Circle key={`radar-point-circle`} cx={0} cy={0} r={radius / 20} fill="white" />
        </AnimatePresence>
      </Group>
    </svg>
  );
};

export default Chart;
