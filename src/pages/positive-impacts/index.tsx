import { useState } from 'react';

import MetaTags from 'containers/meta-tags';

import Modal from 'components/modal';

const ImpactsPage: React.FC = () => {
  const [isModalOpen, setModalVisibility] = useState(false);
  return (
    <div>
      <MetaTags title="Rwanda Carbon Tracker" description="" type="website" />
      <Modal title="Learn more about" open={isModalOpen} onOpenChange={() => setModalVisibility}>
        LEARN MORE ABOUT DATA
      </Modal>
    </div>
  );
};

export default ImpactsPage;
