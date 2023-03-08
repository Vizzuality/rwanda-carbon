type MarginType = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type AreaData = {
  carbonPrice: number;
  carbonReduction: number;
  greenJobCreation: number;
  revenueGeneration: number;
};

export interface ChartTypes {
  data: AreaData[];
  type: 'carbonReduction' | 'greenJobCreation' | 'revenueGeneration';
  width: number;
  height: number;
  margin?: MarginType;
  lineColor?: string;
  value: number;
  preUnit?: string;
  postUnit?: string;
}
