import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { AxisTop, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { PatternLines } from '@visx/pattern';
import { scaleLinear, scaleOrdinal } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { Text } from '@visx/text';
import { extent } from 'd3-array';

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
  lineColor?: string;
}

const Chart = ({
  data,
  width,
  height,
  margin = { top: 0, bottom: 0, left: 0, right: 0 },
  lineColor = 'white',
}: ChartDataTypes) => {
  // set dimensions
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.bottom - margin.top;

  // create accessor functions
  const x = (d) => d.year;

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
  return (
    <svg width={width} height={height}>
      <Group>
        <LinePath
          data={data}
          x={(d) => xScale(d.year) ?? 0}
          y={(d) => yScale(d.present) ?? 0}
          stroke={lineColor}
          strokeWidth={5}
        />
        {/* <HtmlLabel
          x={width - 20}
          y={yScale(usual)}
          horizontalAnchor="end"
          verticalAnchor={'middle'}
          showAnchorLine={false}
        >
          <p className="text-s flex text-white">
            Usual business <span className="text-base font-bold">{usual}</span>
          </p>
        </HtmlLabel> */}
        <AxisTop
          hideTicks
          hideAxisLine
          hideZero
          scale={xScale}
          stroke="black"
          numTicks={0}
          orientation="bottom"
        />
      </Group>
    </svg>
  );
};

export default Chart;
