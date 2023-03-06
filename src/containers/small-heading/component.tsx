import { FC } from 'react';

interface HeadingTypes {
  title: string;
  subtitle: string;
}

const SmallHeading: FC<HeadingTypes> = ({ title, subtitle }: HeadingTypes) => (
  <p className="text-center tracking-tight">
    <span className="font-bold">{title}</span> <span className="text-xs">{subtitle}</span>
  </p>
);

export default SmallHeading;
