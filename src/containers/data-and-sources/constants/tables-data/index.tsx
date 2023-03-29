// Positive impacts data source

export const carbonReductionPotentialData = {
  headings: [
    'Carbon price (USD/tCO2)',
    'Carbon reduction (MtCO2/yr)',
    'Revenue (million USD/yr)',
    'Jobs (FTE supported/yr)',
  ],
  columns: [
    { carbonReduction: 10, carbonPrice: 1.85, revenue: 18.45, jobs: 6602.94 },
    { carbonReduction: 20, carbonPrice: 2.99, revenue: 59.75, jobs: 19784.19 },
    { carbonReduction: 30, carbonPrice: 4.13, revenue: 123.88, jobs: 39543.75 },
    { carbonReduction: 40, carbonPrice: 5.27, revenue: 210.85, jobs: 65881.62 },
    { carbonReduction: 50, carbonPrice: 6.41, revenue: 320.66, jobs: 98797.79 },
    { carbonReduction: 60, carbonPrice: 6.55, revenue: 393.21, jobs: 121775.73 },
    { carbonReduction: 70, carbonPrice: 6.69, revenue: 468.58, jobs: 145826.48 },
    { carbonReduction: 80, carbonPrice: 6.83, revenue: 546.75, jobs: 170950.01 },
    { carbonReduction: 90, carbonPrice: 6.97, revenue: 627.73, jobs: 197146.35 },
    { carbonReduction: 100, carbonPrice: 7.12, revenue: 711.51, jobs: 224415.48 },
  ],
};

export const mitigationData = {
  headings: [
    'Mitigation classification',
    'Mitigation measure',
    'Carbon reduction (MtCO<sub>2</sub>e/yr)',
  ],
  columns: [
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Reduce deforestation',
      carbonReduction: 1.21,
    },
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Afforestation and reforestation',
      carbonReduction: 1.08,
    },
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Forest management',
      carbonReduction: 3.53,
    },
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Grassland and savanna fire mgmt',
      carbonReduction: 0,
    },
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Reduce peatland degradation and conversion',
      carbonReduction: 0,
    },
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Peatland restoration',
      carbonReduction: 0.01,
    },
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Reduce mangrove loss',
      carbonReduction: 0,
    },
    {
      mitigationClassification: 'Ecosystem-based',
      mitigationMeasure: 'Coastal wetland (mangrove) restoration',
      carbonReduction: 0,
    },
    {
      mitigationClassification: 'Agriculture',
      mitigationMeasure: 'Enteric fermentation',
      carbonReduction: 0.13,
    },
    {
      mitigationClassification: 'Agriculture',
      mitigationMeasure: 'Manure management',
      carbonReduction: 0,
    },
    {
      mitigationClassification: 'Agriculture',
      mitigationMeasure: 'Rice cultivation',
      carbonReduction: 0.01,
    },
    {
      mitigationClassification: 'Agriculture',
      mitigationMeasure: 'Nutrient management',
      carbonReduction: 0.01,
    },
    {
      mitigationClassification: 'Agroecological',
      mitigationMeasure: 'Soil carbon croplands',
      carbonReduction: 0.76,
    },
    {
      mitigationClassification: 'Agroecological',
      mitigationMeasure: 'Soil carbon grasslands',
      carbonReduction: 0.07,
    },
    {
      mitigationClassification: 'Agroecological',
      mitigationMeasure: 'Agroforestry',
      carbonReduction: 0.04,
    },
    {
      mitigationClassification: 'Agroecological',
      mitigationMeasure: 'Biochar',
      carbonReduction: 0.27,
    },
  ],
};

export const wwfILOData = {
  headings: [
    'Measure category',
    'Roe 2021  measure',
    'Min total direct job creation FTE/US million',
    'Max total direct job creation FTE/US million',
    'WWF/ILO category',
  ],
  columns: [
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Reduce deforestation',
      minTotal: 275,
      maxTotal: 625,
      wwfIloCategory: 'Afforestation, reforestation, and desertification control',
    },
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Afforestation/ Reforestation',
      minTotal: 275,
      maxTotal: 625,
      wwfIloCategory: 'Afforestation, reforestation, and desertification control',
    },
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Forest management',
      minTotal: 275,
      maxTotal: 625,
      wwfIloCategory: '	Afforestation, reforestation, and desertification control',
    },
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Grassland and savanna fire management',
      minTotal: 275,
      maxTotal: 625,
      wwfIloCategory: '	Afforestation, reforestation, and desertification control',
    },
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Reduce peatland degradation',
      minTotal: 166,
      maxTotal: 500,
      wwfIloCategory: 'Watershed improvement',
    },
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Peatland restoration',
      minTotal: 166,
      maxTotal: 500,
      wwfIloCategory: 'Watershed improvement',
    },
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Reduce conversion of mangroves',
      minTotal: 166,
      maxTotal: 500,
      wwfIloCategory: 'Watershed improvement',
    },
    {
      measureCategory: 'Ecosystems',
      roe2021Measure: 'Coastal wetland (mangrove) restoration',
      minTotal: 166,
      maxTotal: 500,
      wwfIloCategory: 'Watershed improvement',
    },
    {
      measureCategory: 'Agriculture',
      roe2021Measure: 'Enteric fermentation',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
    {
      measureCategory: 'Agriculture',
      roe2021Measure: 'Manure management',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
    {
      measureCategory: 'Agriculture',
      roe2021Measure: 'Improved rice production',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
    {
      measureCategory: 'Agriculture',
      roe2021Measure: 'Nutrient management',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
    {
      measureCategory: 'Agroecology',
      roe2021Measure: 'Soil Carbon Storage croplands',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
    {
      measureCategory: 'Agroecology',
      roe2021Measure: 'Soil Carbon Storage grasslands',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
    {
      measureCategory: 'Agroecology',
      roe2021Measure: 'Agroforestry',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
    {
      measureCategory: 'Agroecology',
      roe2021Measure: 'Biochar application',
      minTotal: 500,
      maxTotal: 750,
      wwfIloCategory: 'Agroforestry including conversion of land',
    },
  ],
};

// Effective governance

export const effectiveGovernanceDataTable = {
  headings: ['Indicator', 'Africa', 'Rwanda'],
  columns: [
    { indicator: 'Political Stability', africa: 43.35, rwanda: 62.48 },
    { indicator: 'Government Effectiveness', africa: 34.71, rwanda: 56.56 },
    { indicator: 'Regulatory Quality', africa: 34.65, rwanda: 52.61 },
    { indicator: 'Rule of Law', africa: 37.04, rwanda: 57.36 },
    { indicator: 'Control of Corruption', africa: 28.74, rwanda: 57.76 },
  ],
};

export const CarbonReductionDataTable = {
  headings: [
    'Year',
    'Historical (MtCO₂e)',
    'Business as usual (MtCO₂e)',
    'With intervention (MtCO₂e)',
  ],
  columns: [
    { year: 2006, historical: 4.035, business: '-', withIntervention: '-' },
    { year: 2007, historical: 4.383, business: '-', withIntervention: '-' },
    { year: 2008, historical: 4.599, business: '-', withIntervention: '-' },
    { year: 2009, historical: 4.833, business: '-', withIntervention: '-' },
    { year: 2010, historical: 5.213, business: '-', withIntervention: '-' },
    { year: 2011, historical: 5.01, business: '-', withIntervention: '-' },
    { year: 2012, historical: 5.16, business: '-', withIntervention: '-' },
    { year: 2013, historical: 5.353, business: '-', withIntervention: '-' },
    { year: 2014, historical: 5.509, business: '-', withIntervention: '-' },
    { year: 2015, historical: 6.01, business: '-', withIntervention: '-' },
    { year: 2016, historical: 5.971, business: '-', withIntervention: '-' },
    { year: 2017, historical: 6.276, business: '-', withIntervention: '-' },
    { year: 2018, historical: 6.756, business: '-', withIntervention: '-' },
    { year: 2035, historical: '-', business: 16.13, withIntervention: 10 },
    { year: 2050, historical: '-', business: 28.3, withIntervention: 17.5 },
  ],
};

export const LandUseDataTable = {
  headings: ['Land cover', 'Area in 2019 (km²)'],
  columns: [
    { landCover: 'Agriculture', area: 10949 },
    { landCover: '1.Agriculture (Very Suitable)', area: 8414 },
    { landCover: '2.Agriculture (Not Suitable)', area: 1438 },
    { landCover: '3.Grass Land (Livestock)', area: 1097 },
    { landCover: 'Forests', area: 7242 },
    { landCover: '1.Natural Forest', area: 1389 },
    { landCover: '2.Forest Plantation', area: 3873 },
    { landCover: '3.Wooded savannah', area: 1537 },
    { landCover: ' 4.Shrubland + Bamboo', area: 443 },
    { landCover: 'Bare high Slopes', area: 1554 },
    { landCover: 'Bare high Slopes of abover 55%', area: 1554 },
    { landCover: ' Built up areas & Infrastructure', area: 2888 },
    { landCover: '1.Cities', area: 1025 },
    { landCover: '2.Rurban Settlements', area: 38 },
    { landCover: '3.Rural Settlements (Gross)', area: 1500 },
    { landCover: '4.Industry', area: 12 },
    { landCover: '5.Roads, railways & Airfields', area: 313 },
    { landCover: 'Water Bodies', area: 1637 },
    { landCover: '1.Lakes & Rivers', area: 1537 },
    { landCover: '2.Buffer zones (50m)', area: 100 },
    { landCover: 'Wetlands', area: 2068 },
    { landCover: '1.Wetlands (protected)', area: 480 },
    { landCover: '2.Wetlands (Conditioned Agri.)', area: 1283 },
    { landCover: '3.Buffer zones (20m)', area: 305 },
    { landCover: 'Balance', area: 26338 },
  ],
  sections: [
    '1.Agriculture (Very Suitable)',
    '2.Agriculture (Not Suitable)',
    '3.Grass Land (Livestock)',
    '1.Natural Forest',
    '2.Forest Plantation',
    '3.Wooded savannah',
    '4.Shrubland + Bamboo',
    'Bare high Slopes of abover 55%',
    '1.Cities',
    '2.Rurban Settlements',
    '3.Rural Settlements (Gross)',
    '4.Industry',
    '5.Roads, railways & Airfields',
    '1.Lakes & Rivers',
    '2.Buffer zones (50m)',
    '1.Wetlands (protected)',
    '2.Wetlands (Conditioned Agri.)',
    '3.Buffer zones (20m)',
  ],
};

export const LandCoverDataTable = {
  headings: ['Land cover', 2019, 2050],
  columns: [
    { landCover: 'Agriculture', year1: 10949, year2: 12433 },
    { landCover: 'Built up areas & Infrastructure', year1: 2888, year2: 3980 },
    { landCover: 'Forests', year1: 7647, year2: 7725 },
    { landCover: 'Water bodies and protected wetlands', year1: 3300, year2: 2200 },
    { landCover: 'Bare high Slopes', year1: 1554, year2: 0 },
  ],
};

export const renewableWaterDataTable = {
  headings: ['Land  cover', 'Baseline', 'Target 2035', 'Target 2050'],
  columns: [
    {
      landCover: 'Renewable water resource availability per capita per annum (m3/capita/a)',
      baseline: 670,
      target2035: 1000,
      target2050: 1700,
    },
  ],
};

export const greenEnergyDataTable = {
  headings: ['Share of renewable energy in power generation mix (%)', '2020', '2035', '2050'],
  columns: [
    {
      energyPower: 'Maximum',
      year1: 53.78,
      year2: '~70',
      year3: '~90',
    },
    {
      energyPower: 'Minimum (the targets from Vision 2050)',
      year1: 53.78,
      year2: '≥60',
      year3: '≥60',
    },
  ],
};
