export const smartCarbonChartData = [
  {
    year: 2006,
    business_as_usual: 4.035,
    historical: 4.035,
    intervention: 0,
  },
  {
    year: 2007,
    business_as_usual: 4.383,
    historical: 4.383,
    intervention: 0,
  },
  {
    year: 2008,
    business_as_usual: 4.599,
    historical: 4.599,
    intervention: 0,
  },
  {
    year: 2009,
    business_as_usual: 4.833,
    historical: 4.833,
    intervention: 0,
  },
  {
    year: 2010,
    business_as_usual: 5.213,
    ical: 5.213,
    intervention: 0,
  },
  {
    year: 2011,
    historical: 5.01,
    intervention: 0,
    business_as_usual: 5.01,
  },
  {
    year: 2012,
    historical: 5.16,
    business_as_usual: 5.16,
    intervention: 0,
  },
  {
    year: 2013,
    historical: 5.353,
    business_as_usual: 5.353,
    intervention: 0,
  },
  {
    year: 2014,
    historical: 5.509,
    business_as_usual: 5.509,
    intervention: 0,
  },
  {
    year: 2015,
    historical: 6.01,
    business_as_usual: 6.01,
    intervention: 0,
  },
  {
    year: 2016,
    historical: 5.971,
    business_as_usual: 5.971,
    intervention: 0,
  },
  {
    year: 2017,
    historical: 6.276,
    business_as_usual: 6.276,
    intervention: 0,
  },
  {
    year: 2018,
    historical: 6.756,
    business_as_usual: 6.756,
    intervention: 0,
  },
  {
    year: 2035,
    business_as_usual: 16.13,
    intervention: 10,
  },
  {
    year: 2050,
    business_as_usual: 28.3,
    intervention: 17.5,
  },
];

export const effectiveGovernanceChartData = [
  {
    shortLabel: 'RL',
    label: 'Rule of Law',
    africa: 37.0427837119317,
    rwanda: 57.3551796524691,
  },
  {
    shortLabel: 'CC',
    label: 'Control of corruption',
    africa: 28.7394386236532,
    rwanda: 57.7649469607429,
  },
  {
    shortLabel: 'PS',
    label: 'Political stability',
    africa: 43.3513483714081,
    rwanda: 62.4804862546967,
  },
  {
    shortLabel: 'GE',
    label: 'Government effectiveness',
    africa: 34.7080387753359,
    rwanda: 56.5628062583581,
  },
  {
    shortLabel: 'RQ',
    label: 'Regulatory quality',
    africa: 34.6524419806273,
    rwanda: 52.613942548939,
  },
];

export const greenEnergyRushChart = [
  {
    year: 2020,
    present: 53.78,
    future: 0,
  },
  {
    year: 2035,
    present: 60,
    future: 10,
  },
  {
    year: 2050,
    present: 60,
    future: 30,
  },
];

export const positiveImpacts = [
  {
    carbonPrice: 10,
    greenJobCreation: 6602.943174 / 1000,
    revenueGeneration: 18.45444126,
    carbonReduction: 1.845444126,
  },
  {
    carbonPrice: 20,
    greenJobCreation: 19784.19354 / 1000,
    revenueGeneration: 59.74729722,
    carbonReduction: 2.987364861,
  },
  {
    carbonPrice: 30,
    greenJobCreation: 39543.75111 / 1000,
    revenueGeneration: 123.8785679,
    carbonReduction: 4.1292855967236,
  },
  {
    carbonPrice: 40,
    greenJobCreation: 65881.61588 / 1000,
    revenueGeneration: 210.8482533,
    carbonReduction: 5.271206332,
  },
  {
    carbonPrice: 50,
    greenJobCreation: 98797.78784 / 1000,
    revenueGeneration: 320.6563534,
    carbonReduction: 6.413127068,
  },
  {
    carbonPrice: 60,
    greenJobCreation: 121775.7336 / 1000,
    revenueGeneration: 393.2117174,
    carbonReduction: 6.553528623,
  },
  {
    carbonPrice: 70,
    greenJobCreation: 145826.4754 / 1000,
    revenueGeneration: 468.5751124,
    carbonReduction: 6.693930178,
  },
  {
    carbonPrice: 80,
    greenJobCreation: 170950.0133 / 1000,
    revenueGeneration: 546.7465386,
    carbonReduction: 6.834331732,
  },
  {
    carbonPrice: 90,
    greenJobCreation: 197146.3473 / 1000,
    revenueGeneration: 627.7259958,
    carbonReduction: 6.974733287,
  },
  {
    carbonPrice: 100,
    greenJobCreation: 224415.4773 / 1000,
    revenueGeneration: 711.5134842,
    carbonReduction: 7.115134842,
  },
];

export const sustainableLandUseData = {
  2019: [
    { id: 'Land cover', parent: null, size: 0 },
    { id: 'Agriculture', parent: 'Land cover', size: 10949, color: '#FAD201' },
    { id: 'Built up areas & Infrastructure', parent: 'Land cover', size: 2888, color: '#00152E' },
    { id: 'Forests', parent: 'Land cover', size: 7647, color: '#47DCAF' },
    {
      id: 'Water bodies and protected wetlands',
      parent: 'Land cover',
      size: 3300,
      color: '#002E65',
    },
    { id: 'Bare high Slopes', parent: 'Land cover', size: 1554, color: '#5BCEFB' },
  ],
  2050: [
    { id: 'Land cover', parent: null, size: 0 },
    { id: 'Agriculture', parent: 'Land cover', size: 12433, color: '#FAD201' },
    { id: 'Built up areas & Infrastructure', parent: 'Land cover', size: 3980, color: '#00152E' },
    { id: 'Forests', parent: 'Land cover', size: 7725, color: '#47DCAF' },
    {
      id: 'Water bodies and protected wetlands',
      parent: 'Land cover',
      size: 2200,
      color: '#002E65',
    },
    { id: 'Bare high Slopes', parent: 'Land cover', size: 0, color: '#5BCEFB' },
  ],
};
