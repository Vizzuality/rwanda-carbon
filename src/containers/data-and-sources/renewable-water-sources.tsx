import { FC } from 'react';

import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

const RenewableWaterSourcesModalContent: FC = () => (
  <div className="space-y-8">
    <Heading />
    <Title>Renewable water sources</Title>
    <p>
      Indicates the availability per person in Rwanda of rechargeable water from groundwater
      aquifers and surface water like rivers and lakes that are not over-exploited.
    </p>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p>
        The data for this indicator is taken from Rwanda’s Vision 2050 (Indicator 32) and from
        Rwanda’s National Water Resources Master Plan (NWRMP). The general objective of the Master
        Plan is to ensure a sustainable water resources development, utilization and management in
        the country. It is intended to be “a blueprint for a process of sustainable water, land and
        related resources development and management with the aim to maximize economic and social
        welfare in an equitable manner while safeguarding the environment”.
      </p>
      <p>
        Renewable water resources are resources that are “rechargeable due to the hydrological cycle
        unless they are overexploited, comprising groundwater aquifers and surface water like rivers
        and lakes” (UN Statistics Division). So this indicator expresses Rwanda’s aims to implement
        integrated water resources management. This management promotes coordinated development and
        management of water, land and related resources to maximise economic and social welfare
        without compromising sustainability of ecosystems. This means integrated management of use
        across domestic consumption, agriculture, commerce, forestry and wildlife sectors. Land
        mitigation measures will need to be considered in this integrated management system but
        ultimately better water management will help secure the long-term sustainability of carbon
        locked in ecosystems.
      </p>
    </Section>
    <Section>
      <SmallHeading>SOURCES</SmallHeading>
      <ul>
        <li>
          UN Statistics Division, Glossary of environment statistics,{' '}
          <a
            href="          https://unstats.un.org/unsd/environmentgl/gesform.asp?getitem=1276 
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            https://unstats.un.org/unsd/environmentgl/gesform.asp?getitem=1276 
          </a>
        </li>
        <li>
          Republic of Rwanda (2015). Rwanda National Water Resources Master Plan. Republic of
          Rwanda, Kigali
        </li>
        <li>Republic of Rwanda (2020). Vision 2050. Republic of Rwanda, Kigali</li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
      <p>Tabular data</p>
    </Section>
  </div>
);

export default RenewableWaterSourcesModalContent;
