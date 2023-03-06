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
    domain: [0, 62],
    range: [0, innerHeight / 2.5],
  });

  const genPoints = (length: number, radius: number) => {
    const step = (Math.PI * 2) / length;
    return [...new Array(length)].map((_, i) => ({
      rwandaX: ((radius * data[i].rwanda) / 100) * Math.sin(i * step + (step / 2) * 7.19),
      rwandaY: ((radius * data[i].rwanda) / 100) * Math.cos(i * step + (step / 2) * 7.19),
      africaX: ((radius * data[i].africa) / 100) * Math.sin(i * step + (step / 2) * 7.19 + 4),
      africaY: ((radius * data[i].africa) / 100) * Math.cos(i * step + (step / 2) * 7.19 + 4),
      labelX: ((radius * (data[i].rwanda + 7)) / 100) * Math.sin(i * step + (step / 2) * 7.19),
      labelY: ((radius * (data[i].rwanda + 7)) / 100) * Math.cos(i * step + (step / 2) * 7.19),
      label: data[i].shortLabel,
    }));
  };
  const reverseYScale = radialScale.copy().range(radialScale.range().reverse());

  const points = genPoints(data.length, radius);
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
              stroke="transparent"
              tickComponent={(p) => {
                return (
                  <HtmlLabel {...p} x={p.x - 10} y={p.y - 12} showAnchorLine={false}>
                    <div className="rounded-3xl border border-cyan-0 border-opacity-30 bg-cobalt-0 px-2 py-0.5 text-xs text-cyan-0">
                      {p.formattedValue}
                    </div>
                  </HtmlLabel>
                );
              }}
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
                x={points[i].labelX - 10}
                y={points[i].labelY - 15}
                showAnchorLine={false}
                horizontalAnchor="middle"
                verticalAnchor="middle"
              >
                <p className="flex rounded-full bg-cobalt-0 p-2 text-xs text-cyan-0">
                  {a.shortLabel}
                </p>
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
