import { FC } from 'react';

import Image from 'next/image';

import cn from 'lib/analytics/classnames';

import { STYLES_WRAPPER } from './constants';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';
const data = [
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
];

const dataMetodology = [
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
];

const data3 = [
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
    measureCategory: 'Agroecology	Soil Carbon Storage croplands',
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
];

const PositiveImpactsModalContent: FC = () => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>Calculation of carbon reduction, economic revenue and job creation potentials</Title>
    <p>
      Land-based carbon reduction potentials for Rwanda were obtained from a recent analysis by Roe
      et al. (2021) that refined and updated the mitigation potentials for 20 land-based measures in
      `&gt;`200 countries and five regions. We used estimates of the cost-effective (available up to
      $100/tCO2) mitigation for 15 measures. We combined these estimates with data on mitigation
      cost curves to simulate how the price of carbon might affect the amount of carbon that can be
      mitigated. For ecosystem based activities we assume that the relative change in carbon
      mitigation with price follows the same curve as that for planting, conserving and managing
      forests in Rwanda. For agricultural measures, we used data for Africa, whilst for
      agroecological measures, we used global data.
    </p>
    <p>
      Potential revenue is calculated as the product of total carbon mitigation and the assumed
      carbon price. Job creation potential is based on WWF and ILO case study data of job creation
      for a given revenue. We linked the mitigation measures to the case study data based on the
      characteristics of the measure and to be conservative, we used the minimum job creation
      estimates.
    </p>
    <p>The resulting values are shown in the table below.</p>
    <div className="relative overflow-x-auto text-xl text-cobalt-0">
      <table className="w-full text-left text-sm ">
        <thead className="border-b-2 border-cobalt-0">
          <tr>
            <th scope="col" className="px-2">
              Carbon price (USD/tCO2)
            </th>
            <th scope="col" className="px-2">
              Carbon reduction (MtCO2/yr)
            </th>
            <th scope="col" className="px-2">
              Revenue (million USD/yr)
            </th>
            <th scope="col" className="px-2">
              Jobs (FTE supported/yr)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ carbonReduction, carbonPrice, revenue, jobs }, index) => (
            <tr key={`carbon-reduction-${carbonReduction}`} className=" ">
              <td
                className={cn({
                  'p-2': true,
                  'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                })}
              >
                {carbonReduction}
              </td>
              <td
                className={cn({
                  'p-2': true,
                  'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                })}
              >
                {carbonPrice}
              </td>
              <td
                className={cn({
                  'p-2': true,
                  'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                })}
              >
                {revenue}
              </td>
              <td
                className={cn({
                  'p-2': true,
                  'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                })}
              >
                {jobs}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p>
        Land-based, cost-effective (available up to $100/tCO<sub>2</sub>), carbon reduction
        potentials for Rwanda were sourced from Roe et al. (2021) for the 15 measures listed in
        Table 1.
      </p>
      <p>
        <i>
          Table 1. Carbon reduction potentials of land-based mitigation measures in Rwanda for
          `&gt;`$100/tCO2e.
        </i>
      </p>
      <div className="relative overflow-x-auto text-xl text-cobalt-0">
        <table className="w-full text-left text-sm ">
          <thead className="border-b-2 border-cobalt-0">
            <tr>
              <th scope="col" className="px-2">
                Mitigation classification
              </th>
              <th scope="col" className="px-2">
                Mitigation measure
              </th>
              <th scope="col" className="px-2">
                Carbon reduction (MtCO2e/yr)
              </th>
            </tr>
          </thead>
          <tbody>
            {dataMetodology.map(
              ({ mitigationClassification, mitigationMeasure, carbonReduction }, index) => (
                <tr key={`carbon-reduction-${carbonReduction}`} className=" ">
                  <td
                    className={cn({
                      'p-2': true,
                      'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                    })}
                  >
                    {mitigationClassification}
                  </td>
                  <td
                    className={cn({
                      'p-2': true,
                      'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                    })}
                  >
                    {mitigationMeasure}
                  </td>
                  <td
                    className={cn({
                      'p-2': true,
                      'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                    })}
                  >
                    {carbonReduction}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <p>
        We used the mean estimate of carbon reduction potential where a range was provided, and
        where more than one study estimate was available, we used the mean value calculated by Roe
        et al (2021).
      </p>
      <p>
        We adjusted the potential carbon reduction available for a given carbon price below
        $100/tCO2 using mitigation cost curves (Figure 1). Since cost curves vary by measure and
        geographical context, we gathered data as specific to the measures and for Rwanda as
        possible. For ecosystem-based measures we used data on costs associated with planting,
        preserving and managing forests in Rwanda. We are assuming that project potential changes in
        the same relative way across other ecosystem measures, such as grassland and savannah fire
        management and peatland restoration. For agricultural measures, cost curves for rice
        production, cropland management and livestock production were available specific to the
        African continent. For all three sectors, there is little effect of carbon prices on
        mitigation potential below $100/tCO2e. Less information is available on how carbon reduction
        potential might change with carbon price for other agroecology activities and so we followed
        the approach of Griscom et al (2017), which uses global estimate of these changes.
      </p>
      <p>
        The carbon reduction potential for a given carbon price is calculated for each measure by
        scaling the potential at $100/tCO2eq by the fractional value for that carbon price from the
        cost curve. These price specific potentials are summed to give the total carbon reduction
        potential across measures in Rwanda for the given carbon price.
      </p>
      <p>
        The potential revenue is then calculated simply as the product of the total carbon reduction
        potential and the price of carbon selected.
      </p>
      <p>
        Job creation potential is based on WWF and ILO case studies of the socio-economic
        consequences of nature-based solutions. We linked the mitigation measures to the case study
        data based on the characteristics of the measure and to be conservative, we used the minimum
        job creation estimates (Table 2). The total revenue for each measure is multiplied by the
        total direct job creation potential estimate.
      </p>
      <p>
        <i>
          Table 2. Mapping of land based carbon reduction measure to WWF/ILO case study categories
        </i>
        <div className="relative overflow-x-auto text-xl text-cobalt-0">
          <table className="w-full text-left text-sm ">
            <thead className="border-b-2 border-cobalt-0">
              <tr>
                <th scope="col" className="px-2">
                  Measure category
                </th>
                <th scope="col" className="px-2">
                  Roe 2021 measure
                </th>
                <th scope="col" className="px-2">
                  Min total direct job creation FTE/US million
                </th>
                <th scope="col" className="px-2">
                  Max total direct job creation FTE/US million
                </th>
                <th scope="col" className="px-2">
                  WWF/ILO category
                </th>
              </tr>
            </thead>
            <tbody>
              {data3.map(
                (
                  { measureCategory, roe2021Measure, minTotal, maxTotal, wwfIloCategory },
                  index
                ) => (
                  <tr key={`measure-category-${measureCategory}-${index}`} className=" ">
                    <td
                      className={cn({
                        'p-2': true,
                        'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                      })}
                    >
                      {measureCategory}
                    </td>
                    <td
                      className={cn({
                        'p-2': true,
                        'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                      })}
                    >
                      {roe2021Measure}
                    </td>
                    <td
                      className={cn({
                        'p-2': true,
                        'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                      })}
                    >
                      {minTotal}
                    </td>
                    <td
                      className={cn({
                        'p-2': true,
                        'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                      })}
                    >
                      {maxTotal}
                    </td>
                    <td
                      className={cn({
                        'p-2': true,
                        'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
                      })}
                    >
                      {wwfIloCategory}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </p>
    </Section>
    <Section>
      <SmallHeading>SOURCES</SmallHeading>
      <ul>
        <li>
          Austin et al (2020)
          <a
            href="https://doi.org/10.1038/s41467-020-19578-z"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.1038/s41467-020-19578-z
          </a>
        </li>
        <li>
          Beach (2015)
          <a
            href="https://doi.org/10.1080/1943815X.2015.1110183"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.1080/1943815X.2015.1110183
          </a>
        </li>
        <li>
          Griscom et al (2017)
          <a
            href="https://doi.org/10.1073/pnas.171046511"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.1073/pnas.171046511
          </a>
        </li>
        <li>
          Roe et al (2021)
          <a href="https://dx.doi.org/10.1111/gcb.15873" target="_blank" rel="noopener noreferrer">
            https://dx.doi.org/10.1111/gcb.15873
          </a>
        </li>
        <li>
          WWF/ILO report NATURE HIRES: How Nature-based Solutions can power a green jobs recovery{' '}
          <a
            href="https://www.ilo.org/employment/units/emp-invest/rural-urban-job-creation/WCMS_757823/lang--en/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.ilo.org/employment/units/emp-invest/rural-urban-job-creation/WCMS_757823/lang--en/index.htm
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
      <p>
        The calculations produce tabular data for the carbon reduction, revenue generation and job
        creation potential of each measure and cumulatively across measures.
      </p>
    </Section>
    <Section>
      <SmallHeading>Other info</SmallHeading>
      <p className="max-w-2xl p-4">
        ** NEW GRAPHIC COMING SOON
        <Image
          alt="Calculation of carbon reduction, economic revenue and job creation potentials"
          src="/images/modal/carbon-calculation.png"
          width={550}
          height={550}
        />
        <i className="font-italic w-full">
          Figure 1. Carbon reduction cost curves for the measures considered for land-based carbon
          reduction in Rwanda.
        </i>
      </p>
    </Section>
    <Section>
      <SmallHeading>Disclaimer</SmallHeading>
      <p>
        The calculations described above are estimates using the best available data published in
        the scientific literature, they should be treated as indicative of potential carbon
        reduction, economic revenue and job creation potentials.
      </p>
    </Section>
  </div>
);

export default PositiveImpactsModalContent;
