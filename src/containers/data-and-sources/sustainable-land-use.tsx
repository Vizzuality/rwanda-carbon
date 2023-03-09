import { FC } from 'react';

import { STYLES_WRAPPER } from './constants';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

const SustainableLandUseModalContent: FC = () => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>Sustainable land use</Title>
    <p>
      This visualization shows Rwanda’s land use composition in 2019 and the target compositions in
      2035 and 2050.
    </p>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p>
        To understand Rwanda’s current land use composition and its future targets we extracted
        information from Rwanda’s Vision 2050 and its National Land Use and Development Master Plan
        (NLUDMP).
      </p>
      <p>Data on land Rwanda’s land use in 2019 is shown in Table 1:</p>
      <p>Table 1. Land areas by land-use and land-cover category for 2019</p>
    </Section>
    <Section>**** Table coming soon</Section>
    <Section>
      <SmallHeading>SOURCES</SmallHeading>
      <ul>
        <li>
          Republic of Rwanda (2020). Vision 2050. Republic of Rwanda, Kigali.
          <a
            href="https://www.minecofin.gov.rw/fileadmin/user_upload/Minecofin/Publications/REPORTS/National_Development_Planning_and_Research/Vision_2050/English-Vision_2050_Abridged_version_WEB_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.minecofin.gov.rw/fileadmin/user_upload/Minecofin/Publications/REPORTS/National_Development_Planning_and_Research/Vision_2050/English-Vision_2050_Abridged_version_WEB_Final.pdf{' '}
          </a>
        </li>
        <li>
          Republic of Rwanda (2020). National Land Use and Development Master Plan (NLUDMP)
          2020-2050, Integrative Plan. Republic of Rwanda, Kigali.
          <a
            href="          https://www.environment.gov.rw/index.php?eID=dumpFile&t=f&f=10551&token=ef94f9c2e05dfb6b5e43acfdaaefa0dfe0071380
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.environment.gov.rw/index.php?eID=dumpFile&t=f&f=10551&token=ef94f9c2e05dfb6b5e43acfdaaefa0dfe0071380
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
      <ul>
        <li>
          Tabular data of to land uses/land covers areas in 2019 and planned allocation for 2050
        </li>
      </ul>
    </Section>
  </div>
);

export default SustainableLandUseModalContent;
