import { FC } from 'react';

import Button from 'components/button';
import Table from 'components/table';

import { STYLES_WRAPPER, STYLES_LIST } from './constants/styles';
import { renewableWaterDataTable } from './constants/tables-data';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

type ModalTypes = {
  onClick: (boolean) => void;
};

const RenewableWaterSourcesModalContent: FC<ModalTypes> = ({ onClick }: ModalTypes) => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>Renewable water sources</Title>
    <p>
      Indicates the availability per person in Rwanda of rechargeable water from groundwater
      aquifers and surface water like rivers and lakes that are not over-exploited.
    </p>
    <div className="relative flex flex-grow flex-col overflow-hidden">
      <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
      <div className="overflow-x-hidden overflow-y-hidden">
        <Table data={renewableWaterDataTable} />
      </div>
      <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
    </div>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p>
        The data for this indicator is taken from Rwanda’s{' '}
        <a
          href="https://www.minecofin.gov.rw/fileadmin/user_upload/Minecofin/Publications/REPORTS/National_Development_Planning_and_Research/Vision_2050/English-Vision_2050_Abridged_version_WEB_Final.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Vision 2050
        </a>{' '}
        (Indicator 32) and from Rwanda’s National Water Resources Master Plan (NWRMP). The general
        objective of the Master Plan is to ensure a sustainable water resources development,
        utilization and management in the country. It is intended to be “a blueprint for a process
        of sustainable water, land and related resources development and management with the aim to
        maximize economic and social welfare in an equitable manner while safeguarding the
        environment”.
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
      <ul className={STYLES_LIST}>
        <li>
          {' '}
          <a
            href="https://unstats.un.org/unsd/environmentgl/gesform.asp?getitem=1276 
            "
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            UN Statistics Division, Glossary of environment statistics.
          </a>
        </li>
        <li>
          Republic of Rwanda (2015). Rwanda National Water Resources Master Plan. Republic of
          Rwanda, Kigali.
        </li>
        <li>
          {' '}
          <a
            href="https://www.minecofin.gov.rw/fileadmin/user_upload/Minecofin/Publications/REPORTS/National_Development_Planning_and_Research/Vision_2050/English-Vision_2050_Abridged_version_WEB_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Republic of Rwanda (2020). Vision 2050. Republic of Rwanda, Kigali.
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
      <ul className={STYLES_LIST}>
        <li>Tabular data.</li>
      </ul>
    </Section>
    <Button
      theme="cobalt"
      size="base"
      className="m-auto self-center tracking-tight"
      onClick={() => onClick(false)}
    >
      Close
    </Button>
  </div>
);

export default RenewableWaterSourcesModalContent;
