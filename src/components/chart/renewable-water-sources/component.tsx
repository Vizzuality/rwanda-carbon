import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { AxisRight } from '@visx/axis';
import { LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';
import { Pattern } from '@visx/pattern';
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
  margin = { top: 40, bottom: 40, left: 0, right: 0 },
}: ChartDataTypes) => {
  // set dimensions
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.bottom - margin.top;

  const target = Math.max(...data.map((d) => d.present));
  const usual = target + Math.max(...data.map((d) => d.future));
  const baseline = Math.min(...data.map((d) => d.present));
  const yScale = scaleLinear({
    domain: [670, 1700],
    range: [innerHeight, 0],
  });

  return (
    <svg width={width} height={innerHeight}>
      <Group top={margin.top}>
        <HtmlLabel
          x={width - 24}
          y={yScale(usual) - 10}
          horizontalAnchor="end"
          verticalAnchor={'middle'}
          showAnchorLine={false}
        >
          <p
            style={{ width: innerWidth }}
            className="flex items-baseline justify-end text-xs text-white"
          >
            Target 2050 <span className="ml-2 text-base font-bold">1700</span>
          </p>
        </HtmlLabel>
        <HtmlLabel
          x={width - 24}
          y={yScale(70)}
          horizontalAnchor="end"
          verticalAnchor={'middle'}
          showAnchorLine={false}
        >
          <p
            style={{ width: innerWidth }}
            className="flex items-baseline justify-end text-xs text-white"
          >
            Target 2035 <span className="ml-2 text-base font-bold">1000</span>
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
            className="flex items-center justify-end text-xs text-red-500"
          >
            Baseline <span className="ml-2 text-base font-bold">670</span>
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

        {/* stacked bar */}
        <AxisRight
          tickComponent={(p) => {
            return (
              <Text {...p} dy={-5} fontSize={12}>
                {p.formattedValue}
              </Text>
            );
          }}
          numTicks={33}
          left={innerWidth - 20}
          orientation="left"
          hideZero
          scale={yScale}
          hideAxisLine
        />
      </Group>
    </svg>
  );
};

export default Chart;
