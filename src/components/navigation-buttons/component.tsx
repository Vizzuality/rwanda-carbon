import { FC, useState } from 'react';

import Link from 'next/link';

import Button from 'components/button';
import Icon from 'components/icon';
import Modal from 'components/modal';

import ARROW from 'svgs/ui/arrow.svg?sprite';

type NavigationTypes = Readonly<{
  previous: string;
  next?: string;
}>;

const NavigationButtons: FC<NavigationTypes> = ({ previous, next }: NavigationTypes) => {
  const [isModalOpen, setModalVisibility] = useState(false);
  return (
    <div className="flex space-x-2">
      <Link
        href={previous}
        as={previous}
        className="relative rounded-3xl border border-cyan-0 px-8 py-2"
      >
        <Icon
          icon={ARROW}
          className="absolute top-1/2 right-5 h-3 w-3 -translate-y-1/2 transform text-white transition-transform"
        />
      </Link>

      <div className="flex space-x-5 py-0">
        <Button theme="cyan" size="xs" onClick={() => setModalVisibility(!isModalOpen)}>
          LEARN MORE
        </Button>

        <Modal
          title="LEARN MORE ABOUT"
          size="default"
          open={isModalOpen}
          onOpenChange={(o) => {
            setModalVisibility(o);
          }}
        >
          <div className="flex grow flex-col space-y-5 overflow-auto py-10">
            <div className="grow px-10">
              <h2>LEARN MORE ABOUT</h2>
            </div>
          </div>
        </Modal>

        {next && (
          <Link
            href={next}
            as={next}
            className="relative rounded-3xl border border-cyan-0 px-8 py-2"
          >
            <Icon
              icon={ARROW}
              className="text-cobalt-500 absolute top-1/2 h-3 w-3 -translate-y-1/2 rotate-180 transform transition-transform"
            />
          </Link>
        )}
      </div>
    </div>
  );
};
export default NavigationButtons;
