import type { PositiveImpactsTypes } from 'types/positive-impacts';

export const IMPACTS = [
  {
    title: 'Green job creation',
    subtitle: '(Jobs)',
    type: 'greenJobCreation',
    lineColor: '#47DCAF',
    postUnit: 'K',
  },
  {
    title: 'Revenue generation',
    subtitle: '(USD)',
    lineColor: '#FAD201',
    type: 'revenueGeneration',
    preUnit: '$',
  },
  {
    title: 'Carbon reduction',
    subtitle: '(MtCO²e)',
    lineColor: '#5BCEFB',
    type: 'carbonReduction',
  },
] as PositiveImpactsTypes[];
