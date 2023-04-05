import { FC } from 'react';

import Image from 'next/image';

import Button from 'components/button';
import Table from 'components/table';

import { STYLES_WRAPPER, STYLES_LIST } from './constants/styles';
import { CarbonReductionDataTable } from './constants/tables-data';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

type ModalTypes = {
  onClick: (boolean) => void;
};

const SmartCarbonModalContent: FC<ModalTypes> = ({ onClick }: ModalTypes) => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>Smart carbon</Title>
    <p className="text-left text-lg">
      This indicator presents how Rwanda’s greenhouse gas (GHG) emissions have evolved in the past
      and how Rwanda aims to reduce its emissions in the future. Rwanda’s envisioned emission
      reduction target is shown by comparing emissions from a business as usual scenario to those
      from a scenario in which Rwanda has implemented interventions to reduce emissions.
    </p>
    <div className="relative flex flex-grow flex-col overflow-hidden">
      <div className="pointer-events-none absolute top-0 -left-2 z-20 h-full w-4 bg-gradient-to-r from-white via-[#EEE] opacity-50" />
      <div className="overflow-x-hidden overflow-y-hidden">
        <Table data={CarbonReductionDataTable} />
      </div>
      <div className="pointer-events-none absolute top-0 -right-2 z-20 h-full w-6 bg-gradient-to-l from-[#EEE] via-white opacity-50" />
    </div>
    <Section>
      <SmallHeading>METHODOLOGY AND DISCUSSION</SmallHeading>
      <p className="text-left text-lg">
        We wanted to highlight Rwanda’s vision for reducing emissions whilst expanding its economy
        between 2020 and 2050. We sourced historic emissions from national GHG inventory reporting
        to the United Nations Framework Convention on Climate Change (UNFCCC). We used the total
        emissions excluding forestry, and other land uses (FOLU) reported in Table 2.3 of Rwanda’s
        First Biennial Update Report for the years 2006 to 2018.
      </p>
      <p className="text-left text-lg">
        Future emissions were extracted from Rwanda’s{' '}
        <a
          href="https://www.minecofin.gov.rw/fileadmin/user_upload/Minecofin/Publications/REPORTS/National_Development_Planning_and_Research/Vision_2050/English-Vision_2050_Abridged_version_WEB_Final.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Vision 2050
        </a>
        , which articulates Rwanda’s ambitions and strategic direction for achieving them. The
        strategy has two overarching goals of promoting economic growth and prosperity, and
        achieving a high quality of life for Rwandans. It is arranged under 5 pillars:
      </p>
      <ul className={STYLES_LIST}>
        <li>Human development</li>
        <li>Competitiveness and integration</li>
        <li>Agriculture for wealth creation</li>
        <li>Urbanization and agglomeration</li>
        <li>Accountable and capable state institution</li>
      </ul>
      <p className="text-left text-lg">
        Rwanda’s Vision 2050 also contains a set of targets and indicators related to these pillars
        and quantified in the Vision 2050 Indicator Matrix. Under the Competitiveness and
        integration pillar, indicator 27 states baseline GHG emissions alongside projected emissions
        in 2035 and 2050 under a Business as Usual (BAU) scenario and under a “with interventions”
        target scenario.
      </p>
      <p className="text-left text-lg">
        In 2018, the energy sector was the main contributor to Rwanda’s GHG emissions, excluding
        FOLU activities, making up 35% of emissions. So carbon market interventions to reduce the
        share of fossil fuel combustion in energy generation will be important for Rwanda and this
        is discussed in more detail in the Share of renewable energy indicator section.
      </p>
      <p className="text-left text-lg">
        Emissions from agriculture, especially enteric fermentation from livestock, and removals of
        carbon by forest lands make up substantial contributions to Rwanda’s overall GHG emissions.
        In 2018, enteric fermentation emissions equated to 47% of the national non-FOLU emissions
        whilst forest land removals amounted to -105% of those same emissions. Therefore investments
        from the carbon market which stimulate the implementation of land-based mitigation measures
        that target emissions from livestock and increasing uptake in forest lands have the
        potential to accelerate Rwanda’s decarbonisation.
      </p>
    </Section>
    <Section>
      <Image
        alt="Calculation of carbon reduction, economic revenue and job creation potentials"
        src="/images/modal/smart-carbon-chart.png"
        width={550}
        height={750}
        className="m-auto"
      />
    </Section>
    <ul className="list-disc py-5 text-xs uppercase">
      <li>I B - International Bunkers.</li>
      <li>5.B - Other (please specify).</li>
      <li>
        5.A - Indirect N20 emissions from the atmospheric deposition of nitrogen in NOX and NH3.
      </li>
      <li>4.E - Other (please specify).</li>
      <li>4.D - Wastewater Treatment and Discharge.</li>
      <li>4.C - Incineration and Open Burning of Waste.</li>
      <li>4.B - Biological Treatment of Solid Waste.</li>
      <li>4.A - Solid Waste Disposal.</li>
      <li>3.0 - Other.</li>
      <li>3.C - Aggregate sources and non-CO₂ emissions sources on land.</li>
      <li>3.8 - Land.</li>
      <li>3.A - Livestock.</li>
      <li>2.H - Other.</li>
      <li>2.G - Other Product Manufacture and Use.</li>
      <li>2.F - Product Uses as Substitutes for Ozone Depleting Substances.</li>
      <li>2.E - Electronics Industry.</li>
      <li>2.D - Non-Energy Products from Fuels and Solvent Use.</li>
      <li>2.C - Metal Industry.</li>
      <li>2.B - Chemical Industry.</li>
      <li>2.A - Mineral Industry.</li>
      <li>1.C - Carbon dioxide Transport and Storage.</li>
      <li>1.8 - Fugitive emissions from fuels.</li>
      <li>1.A - Fuel Combustion Activities.</li>
    </ul>

    <div>
      <SmallHeading>SOURCES</SmallHeading>
      <ul className={STYLES_LIST}>
        <li>
          <a
            href="https://www.minecofin.gov.rw/fileadmin/user_upload/Minecofin/Publications/REPORTS/National_Development_Planning_and_Research/Vision_2050/English-Vision_2050_Abridged_version_WEB_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Republic of Rwanda (2020). Vision 2050.
          </a>
        </li>
        <li>
          <a
            href="https://unfccc.int/sites/default/files/resource/Rwanda%20First%20Biennial%20Update%20Report_Final_V.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Republic of Rwanda, Kigali Republic of Rwanda (2021). Rwanda’s First Biennial Update
            under the United Nations Framework Convention on Climate Change. Republic of Rwanda,
            Kigali.
          </a>
        </li>
      </ul>
    </div>
    <div>
      <SmallHeading>DATA FORMAT</SmallHeading>
      Tabular data.
    </div>
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

export default SmartCarbonModalContent;
