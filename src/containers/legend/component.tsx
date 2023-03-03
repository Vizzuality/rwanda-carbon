import React, { FC } from 'react';

const LegendItems = [
  {
    abbreviation: 'GE',
    label: 'Government effectiveness',
  },
  {
    abbreviation: 'PS',
    label: 'Political stability',
  },
  {
    abbreviation: 'VA',
    label: 'Voice and accountability',
  },
  {
    abbreviation: 'CC',
    label: 'Control of corruption',
  },
  {
    abbreviation: 'RL',
    label: 'Rule of Law',
  },
  {
    abbreviation: 'RQ',
    label: 'Regulatory quality',
  },
];
const Legend: FC = () => {
  return (
    <div className="w-full space-y-5 text-sm font-bold">
      <div className="flex space-x-5">
        <div className="flex items-center space-x-3">
          <div className="h-3 w-5 rounded-2xl bg-cyan-0" />
          <p className="text-white">Africa</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-3 w-5 rounded-2xl bg-white" />
          <p className="text-white">Rwanda</p>
        </div>
      </div>
      <ul className="space-y-3">
        {LegendItems.map(({ abbreviation, label }) => (
          <li key={abbreviation} className="flex space-x-5">
            <span className="text-cyan-0">{abbreviation}</span>
            <p className="text-white">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
