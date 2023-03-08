import { FC } from 'react';

const SmartCarbonModalContent: FC = () => (
  <div className="z-50 m-auto h-screen max-w-2xl grow justify-center space-y-4 overflow-auto py-10 text-center font-inter">
    <span className="font-serif font-bold uppercase tracking-tight">Learn more about</span>
    <h1 className="font-montserrat text-5xl uppercase tracking-tighter">Smart carbon</h1>
    <p className="text-left">
      This indicator presents how Rwanda’s greenhouse gas (GHG) emissions have evolved in the past
      and how Rwanda aims to reduce its emissions in the future. Rwanda’s envisioned emission
      reduction target is shown by comparing emissions from a business as usual scenario to those
      from a scenario in which Rwanda has implemented interventions to reduce emissions.
    </p>
    <div className="space-y-4">
      <h3 className="font-montserrat font-bold uppercase tracking-tight">
        Methodology and discussion
      </h3>
      <p className="text-left">
        We wanted to highlight Rwanda’s vision for reducing emissions whilst expanding its economy
        between 2020 and 2050. We sourced historic emissions from national GHG inventory reporting
        to the United Nations Framework Convention on Climate Change (UNFCCC). We used the total
        emissions excluding forestry, and other land uses (FOLU) reported in Table 2.3 of Rwanda’s
        First Biennial Update Report for the years 2006 to 2018.
      </p>
      <ul className="text-left">
        Future emissions were extracted from Rwanda’s Vision 2050, which articulates Rwanda’s
        ambitions and strategic direction for achieving them. The strategy has two overarching goals
        of promoting economic growth and prosperity, and achieving a high quality of life for
        Rwandans. It is arranged under 5 pillars:
        <li>Human development</li>
        <li>Competitiveness and integration</li>
        <li>Agriculture for wealth creation</li>
        <li>Urbanization and agglomeration</li>
        <li>Accountable and capable state institution</li>
      </ul>
      <p className="text-left">
        Rwanda’s Vision 2050 also contains a set of targets and indicators related to these pillars
        and quantified in the Vision 2050 Indicator Matrix. Under the Competitiveness and
        integration pillar, indicator 27 states baseline GHG emissions alongside projected emissions
        in 2035 and 2050 under a Business as Usual (BAU) scenario and under a “with interventions”
        target scenario.
      </p>
      <p className="text-left">
        In 2018, the energy sector was the main contributor to Rwanda’s GHG emissions, excluding
        FOLU activities, making up 35% of emissions. So carbon market interventions to reduce the
        share of fossil fuel combustion in energy generation will be important for Rwanda and this
        is discussed in more detail in the Share of renewable energy indicator section.
      </p>
      <p className="text-left">
        Emissions from agriculture, especially enteric fermentation from livestock, and removals of
        carbon by forest lands make up substantial contributions to Rwanda’s overall GHG emissions.
        In 2018, enteric fermentation emissions equated to 47% of the national non-FOLU emissions
        whilst forest land removals amounted to -105% of those same emissions. Therefore investments
        from the carbon market which stimulate the implementation of land-based mitigation measures
        that target emissions from livestock and increasing uptake in forest lands have the
        potential to accelerate Rwanda’s decarbonisation.
      </p>
    </div>
    <div>
      <h3 className="font-montserrat font-bold uppercase tracking-tight">SOURCES</h3>
      <ul>
        <li>Republic of Rwanda (2020). Vision 2050.</li>
        <li>
          Republic of Rwanda, Kigali Republic of Rwanda (2021). Rwanda’s First Biennial Update under
          the United Nations Framework Convention on Climate Change. Republic of Rwanda, Kigali
        </li>
      </ul>
    </div>
    <div>
      <h3>DATA FORMAT</h3>
      TABULAR DATA
    </div>
    <div>
      <h3>DATA FORMAT</h3>
      **** GRAPHIC
      <ul>
        <li>I B - International Bunkers</li>
        <li>5.B - Other (please specify)</li>
        <li>
          5.A - Indirect N20 emissions from the atmospheric deposition of nitrogen in NOX and NH3{' '}
        </li>
        <li>4.E - Other (please specify)</li>
        <li>4.D - Wastewater Treatment and Discharge</li>
        <li>4.C - Incineration and Open Burning of Waste</li>
        <li>4.B - Biological Treatment of Solid Waste</li>
        <li>4.A - Solid Waste Disposal</li>
        <li>3.0 - Other</li>
        <li>3.C - Aggregate sources and non-CO2 emissions sources on land</li>
        <li>3.8 - Land</li>
        <li>3.A - Livestock</li>
        <li>2.H - Other</li>
        <li>2.G - Other Product Manufacture and Use</li>
        <li>2.F - Product Uses as Substitutes for Ozone Depleting Substances</li>
        <li>2.E - Electronics Industry</li>
        <li>2.D - Non-Energy Products from Fuels and Solvent Use</li>
        <li>2.C - Metal Industry</li>
        <li>2.B - Chemical Industry</li>
        <li>2.A - Mineral Industry</li>
        <li>1.C - Carbon dioxide Transport and Storage</li>
        <li>1.8 - Fugitive emissions from fuels</li>
        <li>1.A - Fuel Combustion Activities</li>
      </ul>
    </div>
  </div>
);

export default SmartCarbonModalContent;
