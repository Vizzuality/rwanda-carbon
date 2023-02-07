import { FC } from 'react';

import MetaTags from 'containers/meta-tags';

import Header from 'components/header';

const EnergyContentPage: FC = () => {
  return (
    <div>
      <div>
        <MetaTags title="Rwanda Carbon Tracker" description="" type="website" />
        <Header />
      </div>
      <h1>Energy</h1>
    </div>
  );
};

export default EnergyContentPage;
