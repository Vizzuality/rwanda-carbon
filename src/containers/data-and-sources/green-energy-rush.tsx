import { FC } from 'react';

import Table from 'components/table';

import { STYLES_LIST, STYLES_WRAPPER } from './constants/styles';
import { greenEnergyDataTable } from './constants/tables-data';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

const GreenEnergyRushModalContent: FC = () => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>Green energy rush</Title>
    <p>The proportion of power generation that comes from renewable sources.</p>

    <div className="relative flex flex-grow flex-col overflow-hidden">
      <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
      <div className="overflow-x-hidden overflow-y-hidden">
        <Table data={greenEnergyDataTable} />
      </div>
      <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
    </div>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p>
        Data for this indicator was sourced from Rwanda’s Vision 2050 (Indicator 35) and further
        interpretation from Rwanda’s Energy Sector Capacity Development Strategy 2019-2024 and
        information from Rwanda Energy Group.
      </p>
      <p>
        In 2019, Rwanda had 224 MW of installed electricity generation capacity, of which 53% is
        renewable. Hydropower makes up the majority of this renewable energy generation, followed by
        solar power.
      </p>
      <p>
        Rwanda’s Vision 2050 makes clear that for the country to meet its development targets,
        energy generation will need to expand to meet these demands. It estimates that capacity
        might need to grow to 3,788 MW by 2035 and 13,981 MW by 2050, to cater for the growing
        demand. Reaching and maintaining a 60% of renewable energy generation therefore requires
        considerable expansion of renewable energy sources.
      </p>
      <p>
        The targets for 2035 provide a lower bound for the share of renewable energy in the
        generation mix. We have assumed a plausible upper bound of 70% for 2035, based on a high
        ambition scenario of installed renewable energy generation quantified for Rwanda by the
        Global Green Growth Institute (Grafakos et al., 2020).This high ambition scenario achieved
        66% share of renewable energy by 2030.
      </p>
    </Section>
    <Section>
      <SmallHeading>SOURCES</SmallHeading>
      <ul className={STYLES_LIST}>
        <li>
          Grafakos, S., Senshaw, D., Quezada, D., and Toro A., (2020), Employment Assessment of
          Renewable Energy: Power sector pathways compatible with NDCs and National Energy Plans,
          Global Green Growth Institute, Seoul.
        </li>
        <li>
          Republic of Rwanda (2019). Energy Sector Capacity Development Strategy. Republic of
          Rwanda, Kigali
        </li>
        <li>Republic of Rwanda (2020). Vision 2050. Republic of Rwanda, Kigali</li>
        <li>
          Rwanda Energy Group.
          <a
            href="          https://www.reg.rw/what-we-do/generation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.reg.rw/what-we-do/generation/
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
      <p>Tabular data</p>
    </Section>
    <Section>
      <SmallHeading>Disclaimer</SmallHeading>
      <p>
        The upper bound for share of renewable energy generation is a hypothetical scenario given
        that the target is to be above 60%.
      </p>
    </Section>
  </div>
);

export default GreenEnergyRushModalContent;
