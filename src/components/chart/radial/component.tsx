import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { AxisLeft } from '@visx/axis';
import { GridRadial } from '@visx/grid';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Line, Circle } from '@visx/shape';
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
  labelValue: number;
};

interface ChartDataTypes {
  data: RadialData[];
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

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const radius = Math.min(xMax, yMax) / 1.45;
  const radialScale = scaleLinear({
    domain: [0, 60],
    range: [0, innerHeight / 2.5],
  });

  const genPoints = (length: number, radius: number) => {
    const step = (Math.PI * 2) / length;
    return [...new Array(length)].map((_, i) => ({
      rwandaX: ((radius * data[i].africa) / 100) * Math.sin(i * step + 15),
      rwandaY: ((radius * data[i].africa) / 100) * Math.cos(i * step + 15),
      africaX: ((radius * data[i].rwanda) / 100) * Math.sin(i * step + 11),
      africaY: ((radius * data[i].rwanda) / 100) * Math.cos(i * step + 11),
      labelX: ((radius * data[i].labelValue) / 100) * Math.sin(i * step + 15),
      labelY: ((radius * data[i].labelValue) / 100) * Math.cos(i * step + 15),
      label: data[i].shortLabel,
    }));
  };
  const reverseYScale = radialScale.copy().range(radialScale.range().reverse());

  const points = genPoints(data.length, radius);

  return (
    <svg width={width} height={height}>
      <Group top={innerHeight / 2} left={innerWidth - innerWidth / 4}>
        <AnimatePresence>
          <GridRadial scale={radialScale} stroke="#5BCEFB" numTicks={3} strokeWidth={1} />
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            transition={{
              delay: 0.1,
            }}
          >
            <AxisLeft
              top={-height / 2.5}
              scale={reverseYScale}
              numTicks={3}
              tickStroke="none"
              tickLabelProps={() => ({
                fontSize: 8,
                fill: '#5BCEFB',
                fillOpacity: 1,
                textAnchor: 'middle',
                dx: '1em',
                dy: '-0.5em',
                stroke: 'red',
                strokeWidth: 0.5,
                paintOrder: 'stroke',
              })}
              hideAxisLine
            />
          </motion.g>

          {data.map((a, i) => (
            <motion.g
              key={a.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1 }}
              transition={{
                delay: 0.1,
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
              <HtmlLabel
                x={points[i].labelX}
                y={points[i].labelY}
                anchorLineStroke="transparent"
                horizontalAnchor="end"
                verticalAnchor="end"
              >
                <p className="flex rounded-3xl bg-cobalt-0 text-xs text-cyan-0">{a.shortLabel}</p>
              </HtmlLabel>
            </motion.g>
          ))}
          <Circle key={`radar-point-circle`} cx={0} cy={0} r={radius / 20} fill="white" />
        </AnimatePresence>
      </Group>
    </svg>
  );
};

export default Chart;
