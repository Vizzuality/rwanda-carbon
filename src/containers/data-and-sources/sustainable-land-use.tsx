import { FC } from 'react';

import Table from 'components/table';

import { STYLES_WRAPPER } from './constants/styles';
import { LandCoverDataTable, LandUseDataTable } from './constants/tables-data';
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
      <div className="relative flex flex-grow flex-col overflow-hidden">
        <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
        <div className="overflow-x-hidden overflow-y-hidden">
          <Table textLeft data={LandUseDataTable} />
        </div>
        <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
      </div>
    </Section>
    <Section>
      <p>
        The NLUDMP analyzes, for 13 prime land uses, the current cover, long-term needs and plans
        allocation targets for 2035 and 2050. These form the targets listed for indicator 31 of
        Rwanda’s Vision 2050 under the pillar of Urbanization and Agglomeration.
      </p>
      <p>
        The NLUDMP suggests expanding agricultural land area so that the country can grow more food
        to support its growing population. It will also expects urban areas to expand as the country
        grows. With relevance to land based mitigation, Rwanda plans to entirely preserve 1,389 km²
        of natural forests and all existing 3,873 km² of forest plantations. 1,554 km² of bare high
        slopes will be also forested. In parallel, the NLUDMP will preserve 497 km² of Wooded
        savannah and 7km² of shrublands. 1476 km² of the last two kinds of wood will be allocated
        for Agriculture. All the water bodies and their buffer zones and protected wetlands and
        their buffer zones will be fully protected. Unprotected wetlands will be conditionally open
        for agriculture, which may add 1,100 km² to the agricultural stock.
      </p>
      <p>
        To be consistent with the reporting of land areas for the target in 2050, we aggregated
        areas for 2019 in the same way. So forested areas includes buffer zones of water bodies and
        wetlands. We also include Bare high slopes as a separate category, since the aim is for this
        area to be forested by 2050. The re-aggregated data for 2019 and planned allocations for
        2050 are shown in Table 2.
      </p>
      <p>
        Table 2. Consistent representation of land use/land cover in 2019 and planned allocations
        for 2050. Areas are in units of km².
      </p>
      <div className="relative flex flex-grow flex-col overflow-hidden">
        <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
        <div className="overflow-x-hidden overflow-y-hidden">
          <Table textLeft data={LandCoverDataTable} />
        </div>
        <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
      </div>
    </Section>
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
