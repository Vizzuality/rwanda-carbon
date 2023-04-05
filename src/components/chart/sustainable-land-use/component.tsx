import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { Group } from '@visx/group';
import { Treemap, hierarchy, stratify, treemapSquarify } from '@visx/hierarchy';
import { motion, AnimatePresence } from 'framer-motion';

export const background = '#00152E'; // navy

type Data = {
  id: string;
  parent: string | null;
  size: number | null;
};

interface ChartDataTypes {
  data: Data[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

const COLORS = {
  Agriculture: {
    nodeColor: '#FAD201',
    textColor: '#002E65',
  },
  'Built up areas & Infrastructure': {
    nodeColor: '#00152E',
    textColor: '#FFFFFF',
  },
  Forests: {
    nodeColor: '#47DCAF',
    textColor: '#002E65',
  },
  'Water bodies and protected wetlands': {
    nodeColor: '#5BCEFB',
    textColor: '#002E65',
  },
  'Bare high Slopes': {
    nodeColor: '#002E65',
    textColor: '#FFFFFF',
  },
};

const delays = [0, 0.9, 1.2, 0.3, 0.6, 1.5];
const SustainableLandUseChart = ({
  data,
  width,
  height,
  margin = { top: 0, left: 0, right: 0, bottom: 0 },
}: ChartDataTypes) => {
  const dataParsed = stratify<Data>()
    .id((d) => d.id)
    .parentId((d) => d.parent)(data)
    .sum((d) => d.size ?? 0);
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const root = hierarchy(dataParsed).sort((a, b) => (b.value || 0) - (a.value || 0));

  return (
    <div>
      <div>
        <svg width={width} height={height}>
          <rect width={width} height={height} rx={14} fill={background} />
          <AnimatePresence>
            <Treemap<typeof dataParsed>
              root={root}
              size={[xMax, yMax]}
              tile={treemapSquarify}
              round
            >
              {(treemap) => (
                <Group>
                  {treemap.descendants().map((node, i) => {
                    const nodeWidth = node.x1 - node.x0;
                    const nodeHeight = node.y1 - node.y0;
                    return (
                      <Group key={node.data.id} top={node.y0} left={node.x0}>
                        {node.depth === 1 && (
                          <motion.rect
                            width={nodeWidth}
                            height={nodeHeight}
                            stroke={background}
                            strokeWidth={0}
                            fill="transparent"
                          />
                        )}
                        {node.depth === 1 && (
                          <motion.rect
                            width={nodeWidth}
                            height={nodeHeight}
                            stroke={background}
                            strokeWidth={0}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'linear', delay: delays[i], duration: 0.2 }}
                            fill={COLORS[node.data.id].nodeColor || 0}
                          />
                        )}
                        {node.depth === 1 && nodeWidth !== 0 && nodeHeight !== 0 && (
                          <HtmlLabel
                            x={nodeWidth}
                            y={node.y1 - node.y0 - 30}
                            showAnchorLine={false}
                            horizontalAnchor="end"
                            verticalAnchor="middle"
                          >
                            <motion.p
                              className="flex h-12 items-end justify-end p-2 pr-8 text-end text-xs font-bold uppercase"
                              style={{
                                color: COLORS[node.data.id]?.textColor,
                                width: nodeWidth,
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ type: 'linear', delay: delays[i], duration: 0.1 }}
                            >
                              {node.data.id}
                            </motion.p>
                          </HtmlLabel>
                        )}
                      </Group>
                    );
                  })}
                </Group>
              )}
            </Treemap>
          </AnimatePresence>
        </svg>
      </div>
    </div>
  );
};

export default SustainableLandUseChart;
