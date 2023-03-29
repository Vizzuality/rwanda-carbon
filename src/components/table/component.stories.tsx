import { Story } from '@storybook/react/types-6-0';

import Table from './component';
import { TableProps } from './types';

const StoryTag = {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
};

export default StoryTag;

const Template: Story<TableProps> = (data: TableProps) => <Table {...data} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    headings: [
      'Carbon price (USD/tCO₂)',
      'Carbon reduction (MtCO₂/yr)',
      'Revenue (million USD/yr)',
      'Jobs (FTE supported/yr)',
    ],
    columns: [
      { carbonReduction: 10, carbonPrice: 1.85, revenue: 18.45, jobs: 6602.94 },
      { carbonReduction: 20, carbonPrice: 2.99, revenue: 59.75, jobs: 19784.19 },
      { carbonReduction: 30, carbonPrice: 4.13, revenue: 123.88, jobs: 39543.75 },
      { carbonReduction: 40, carbonPrice: 5.27, revenue: 210.85, jobs: 65881.62 },
      { carbonReduction: 50, carbonPrice: 6.41, revenue: 320.66, jobs: 98797.79 },
      { carbonReduction: 60, carbonPrice: 6.55, revenue: 393.21, jobs: 121775.73 },
      { carbonReduction: 70, carbonPrice: 6.69, revenue: 468.58, jobs: 145826.48 },
      { carbonReduction: 80, carbonPrice: 6.83, revenue: 546.75, jobs: 170950.01 },
      { carbonReduction: 90, carbonPrice: 6.97, revenue: 627.73, jobs: 197146.35 },
      { carbonReduction: 100, carbonPrice: 7.12, revenue: 711.51, jobs: 224415.48 },
    ],
  },
};
