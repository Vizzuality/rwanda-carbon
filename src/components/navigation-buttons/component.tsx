import { FC, useState } from 'react';

import Link from 'next/link';

import EffectiveGovernanceModalContent from 'containers/data-and-sources/effective-governance';
import GreenEnergyRushModalContent from 'containers/data-and-sources/green-energy-rush';
import RenewableWaterSourcesModalContent from 'containers/data-and-sources/renewable-water-sources';
import SmartCarbonModalContent from 'containers/data-and-sources/smart-carbon';
import SustainableLandUseModalContent from 'containers/data-and-sources/sustainable-land-use';

import Button from 'components/button';
import { SIZE, THEME } from 'components/button/constants';
import Icon from 'components/icon';
import Modal from 'components/modal';
import cn from 'lib/analytics/classnames';

import ARROW from 'svgs/ui/arrow.svg?sprite';
type NavigationTypes = Readonly<{
  previous?: string;
  current: string;
  next?: string;
  theme?: 'cobalt' | 'cyan';
}>;

const NavigationButtons: FC<NavigationTypes> = ({
  previous,
  current,
  next,
  theme = 'cyan',
}: NavigationTypes) => {
  const [isModalOpen, setModalVisibility] = useState(false);

  return (
    <div className="flex space-x-2">
      {previous && (
        <Link
          href={previous}
          as={previous}
          className={cn({
            relative: true,
            [THEME.cyan]: theme === 'cyan',
            [SIZE.xs]: true,
            [THEME.cobalt]: theme === 'cobalt',
          })}
        >
          <Icon
            icon={ARROW}
            className={cn({
              'absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform tracking-widest text-white transition-transform':
                true,
              'hover:text-cyan-0': theme === 'cobalt',
            })}
          />
        </Link>
      )}

      <div className="flex max-w-md space-x-5 py-0 tracking-widest">
        <Button theme={theme} size="xs" onClick={() => setModalVisibility(!isModalOpen)}>
          DATA AND SOURCES
        </Button>

        <Modal
          title="LEARN MORE ABOUT"
          size="default"
          open={isModalOpen}
          onOpenChange={(o) => {
            setModalVisibility(o);
          }}
        >
          <div className="md:max-w-8xl m-auto flex min-h-screen w-full flex-col space-y-10 py-28 lg:max-w-7xl">
            {current === 'effective-governance' && (
              <EffectiveGovernanceModalContent onClick={setModalVisibility} />
            )}
            {current === 'smart-carbon' && <SmartCarbonModalContent onClick={setModalVisibility} />}
            {current === 'sustainable-land-use' && (
              <SustainableLandUseModalContent onClick={setModalVisibility} />
            )}
            {current === 'renewable-water-sources' && (
              <RenewableWaterSourcesModalContent onClick={setModalVisibility} />
            )}
            {current === 'green-energy-rush' && (
              <GreenEnergyRushModalContent onClick={setModalVisibility} />
            )}
          </div>
        </Modal>
      </div>

      {next && (
        <Link
          href={next}
          as={next}
          className={cn({
            relative: true,
            [THEME.cyan]: theme === 'cyan',
            [SIZE.xs]: true,
            [THEME.cobalt]: theme === 'cobalt',
            'font-bold': true,
          })}
        >
          <Icon
            icon={ARROW}
            className={cn({
              'absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-180 transform transition-transform':
                true,
              'hover:text-cyan-0': theme === 'cobalt',
            })}
          />
        </Link>
      )}
    </div>
  );
};
export default NavigationButtons;
