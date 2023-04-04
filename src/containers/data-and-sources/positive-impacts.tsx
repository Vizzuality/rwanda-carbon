import { FC } from 'react';

import Image from 'next/image';

import Table from 'components/table';

import { STYLES_WRAPPER, STYLES_LIST } from './constants/styles';
import { carbonReductionPotentialData, mitigationData, wwfILOData } from './constants/tables-data';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

const PositiveImpactsModalContent: FC = () => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>Calculation of carbon reduction, economic revenue and job creation potentials</Title>
    <p className="text-xl">
      Land-based carbon reduction potentials for Rwanda were obtained from a recent analysis by Roe
      et al. (2021) that refined and updated the mitigation potentials for 20 land-based measures in
      over 200 countries and five regions. We used estimates of the cost-effective (available up to
      $100/tCO<sub>2</sub>) mitigation for 15 measures. We combined these estimates with data on
      mitigation cost curves to simulate how the price of carbon might affect the amount of carbon
      that can be mitigated. For ecosystem based activities we assume that the relative change in
      carbon mitigation with price follows the same curve as that for planting, conserving and
      managing forests in Rwanda. For agricultural measures, we used data for Africa, whilst for
      agroecological measures, we used global data.
    </p>
    <p className="text-xl">
      Potential revenue is calculated as the product of total carbon mitigation and the assumed
      carbon price. Job creation potential is based on WWF and ILO case study data of job creation
      for a given revenue. We linked the mitigation measures to the case study data based on the
      characteristics of the measure and to be conservative, we used the minimum job creation
      estimates.
    </p>

    <div className="relative flex flex-grow flex-col overflow-hidden">
      <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
      <div className="overflow-x-hidden overflow-y-hidden">
        <Table data={carbonReductionPotentialData} />
      </div>
      <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
    </div>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p className="text-xl">
        Land-based, cost-effective (available up to $100/tCO<sub>2</sub>), carbon reduction
        potentials for Rwanda were sourced from Roe et al. (2021) for the 15 measures listed in
        Table 1.
      </p>
      <p>
        <i>
          Table 1. Carbon reduction potentials of land-based mitigation measures in Rwanda for
          &lt;$100/tCO<sub>2</sub>e.
        </i>
      </p>
      <div className="relative flex flex-grow flex-col overflow-hidden">
        <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
        <div className="overflow-x-hidden overflow-y-hidden">
          <Table data={mitigationData} />
        </div>
        <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
      </div>
      <p className="text-xl">
        We used the mean estimate of carbon reduction potential where a range was provided, and
        where more than one study estimate was available, we used the mean value calculated by Roe
        et al (2021).
      </p>
      <p className="text-xl">
        We adjusted the potential carbon reduction available for a given carbon price below $100/tCO
        <sub>2</sub> using mitigation cost curves (Figure 1). Since cost curves vary by measure and
        geographical context, we gathered data as specific to the measures and for Rwanda as
        possible. For ecosystem-based measures we used data on costs associated with planting,
        preserving and managing forests in Rwanda. We are assuming that project potential changes in
        the same relative way across other ecosystem measures, such as grassland and savannah fire
        management and peatland restoration. For agricultural measures, cost curves for rice
        production, cropland management and livestock production were available specific to the
        African continent. For all three sectors, there is little effect of carbon prices on
        mitigation potential below $100/tCO<sub>2</sub>e. Less information is available on how
        carbon reduction potential might change with carbon price for other agroecology activities
        and so we followed the approach of Griscom et al (2017), which uses global estimate of these
        changes.
      </p>
      <p className="text-xl">
        The carbon reduction potential for a given carbon price is calculated for each measure by
        scaling the potential at $100/tCO<sub>2</sub>eq by the fractional value for that carbon
        price from the cost curve. These price specific potentials are summed to give the total
        carbon reduction potential across measures in Rwanda for the given carbon price.
      </p>
      <p className="text-xl">
        The potential revenue is then calculated simply as the product of the total carbon reduction
        potential and the price of carbon selected.
      </p>
      <p className="text-xl">
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
      </p>
      <div className="relative flex flex-grow flex-col overflow-hidden">
        <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
        <div className="overflow-x-hidden overflow-y-hidden">
          <Table data={wwfILOData} />
        </div>
        <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
      </div>
    </Section>
    <Section>
      <SmallHeading>SOURCES</SmallHeading>
      <ul className={STYLES_LIST}>
        <li>
          <a
            href="https://doi.org/10.1038/s41467-020-19578-z"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Austin et al (2020).
          </a>
        </li>
        <li>
          <a
            href="https://doi.org/10.1080/1943815X.2015.1110183"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Beach (2015).
          </a>
        </li>
        <li>
          <a
            href="https://doi.org/10.1073/pnas.171046511"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Griscom et al (2017).
          </a>
        </li>
        <li>
          <a
            href="https://dx.doi.org/10.1111/gcb.15873"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Roe et al (2021).
          </a>
        </li>
        <li>
          <a
            href="https://www.ilo.org/employment/units/emp-invest/rural-urban-job-creation/WCMS_757823/lang--en/index.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WWF/ILO report NATURE HIRES: How Nature-based Solutions can power a green jobs recovery.
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
      <p className="text-xl">
        The calculations produce tabular data for the carbon reduction, revenue generation and job
        creation potential of each measure and cumulatively across measures.
      </p>
    </Section>
    <Section>
      <SmallHeading>Other info</SmallHeading>
      <div className="w-full justify-center p-4">
        <div className="items-left m-auto ml-20 flex flex-col justify-center p-4">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-8 rounded-2xl bg-cobalt-0" />
            <span className="text-xs">Ecosystems</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-8 rounded-2xl bg-cyan-0" />
            <span className="text-xs">Agriculture</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="h-2 w-3 rounded-full bg-cobalt-0"></div>
              <div className="h-2 w-3 rounded-full bg-cyan-0"></div>
            </div>
            <span className="text-xs">Agroecology: Soil carbon</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="h-2 w-3 rounded-full bg-cobalt-0"></div>
              <div className="h-2 w-3 rounded-full bg-cyan-0"></div>
            </div>
            <span className="text-xs">Agroecology: Agroforestry & Biochar</span>
          </div>
        </div>
        <Image
          alt="Calculation of carbon reduction, economic revenue and job creation potentials"
          src="/images/modal/positive-impacts-chart.png"
          className="m-auto"
          width={550}
          height={550}
        />
        <i className="font-italic w-full">
          Figure 1. Carbon reduction cost curves for the measures considered for land-based carbon
          reduction in Rwanda.
        </i>
      </div>
    </Section>
    <Section>
      <SmallHeading>Disclaimer</SmallHeading>
      <p className="text-xl">
        The calculations described above are estimates using the best available data published in
        the scientific literature, they should be treated as indicative of potential carbon
        reduction, economic revenue and job creation potentials.
      </p>
    </Section>
  </div>
);

export default PositiveImpactsModalContent;
