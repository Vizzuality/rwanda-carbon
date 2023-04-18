import { FC } from 'react';

import Button from 'components/button';
import Table from 'components/table';

import { STYLES_WRAPPER, STYLES_LIST } from './constants/styles';
import { effectiveGovernanceDataTable } from './constants/tables-data';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

type ModalTypes = {
  onClick: (boolean) => void;
};

const EffectiveGovernanceModalContent: FC<ModalTypes> = ({ onClick }: ModalTypes) => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>Effective Governance</Title>
    <p className="text-left text-lg">
      To indicate Rwanda’s institutional governance performance, we used the World Bank’s governance
      indicators for 2021. All indicators were rescaled to range from 0 to 100 for ease of
      interpretation and comparison. We also calculated a mean value for each indicator across all
      other African countries as a reference for Rwanda’s indicator values.
    </p>
    <div className="relative flex flex-grow flex-col overflow-hidden">
      <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
      <div className="overflow-x-hidden overflow-y-hidden">
        <Table data={effectiveGovernanceDataTable} />
      </div>
      <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
    </div>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p className="text-left text-lg">
        Values for indicators of governance were obtained from the World Bank governance indicator
        project (Kaufmann et al., 2010). The aggregate indicators produced by the World Bank are
        based on over 30 underlying data sources reporting the perceptions of governance of a large
        number of survey-respondents and expert assessments worldwide. The raw indicator values
        range from -2.5 (poor performance) to 2.5 (strong performance). The raw values for each
        indicator were re-scaled to lie with the range 0 to 100 using the following:
        (xi-min(x))/(max(x)-min(x))*100, where i indicates the value of indicator x for a given
        country. We extracted the rescaled indicator values for Rwanda and calculated average values
        for other countries across Africa to compare the Rwanda values against.{' '}
      </p>
    </Section>
    <Section>
      <SmallHeading>SOURCES</SmallHeading>
      <ul className={STYLES_LIST}>
        <li>
          <a
            href="https://databank.worldbank.org/source/worldwide-governance-indicators"
            target="_blank"
            rel="noopener noreferrer"
            className="block underline"
          >
            Daniel Kaufmann, Aart Kraay and Massimo Mastruzzi (2010). &quot;The Worldwide World Bank
            Policy Research  Working Paper No. 5430&quot;.
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
      <p className="text-left text-lg">Tabular data.</p>
      <p className="text-left text-lg">Polar bar plot.</p>
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

export default EffectiveGovernanceModalContent;
