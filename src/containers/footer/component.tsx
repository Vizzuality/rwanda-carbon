import React, { FC, useState } from 'react';

import Image from 'next/image';

import Button from 'components/button';
import Modal from 'components/modal';

const Footer: FC = () => {
  const [isModalOpen, setModalVisibility] = useState(false);

  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <div className="m-auto flex justify-center space-x-8 p-2 font-inter text-xs tracking-wide text-white">
        <div className="flex items-center space-x-5 py-0">
          <div>
            <button
              type="button"
              onClick={() => setModalVisibility(!isModalOpen)}
              className="m-auto flex justify-center space-x-8 p-2 font-inter text-xs tracking-wide text-white"
            >
              About
            </button>

            <Modal
              title="LEARN MORE ABOUT"
              size="default"
              open={isModalOpen}
              onOpenChange={(o) => {
                setModalVisibility(o);
              }}
            >
              <div className="m-auto flex h-screen w-full max-w-[70%] flex-col items-center justify-center space-y-10 py-10 px-10">
                <Image alt="UNDP" src="/images/undp.png" height={140} width={70} />
                <p className="text-justify font-inter text-xl leading-8">
                  UNDP is the leading United Nations organization fighting to end the injustice of
                  poverty, inequality, and climate change. Working with our broad network of experts
                  and partners in 170 countries, we help nations to build integrated, lasting
                  solutions for people and planet. Learn more at{' '}
                  <a
                    href="https://www.undp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    United Nations Development Programme
                  </a>{' '}
                  or follow at <span className="underline">@UNDP</span>.
                </p>
                <Button
                  theme="cobalt"
                  size="base"
                  className="tracking-tight"
                  onClick={() => setModalVisibility(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.undp.org/copyright-terms-use"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
