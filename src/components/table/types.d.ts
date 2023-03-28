type dataTypes = {
  headings: (string | number)[];
  columns?: { [key: string]: number | string }[];
  sections?: (string | number)[];
};

export interface TableProps {
  data: dataTypes;
  footer?: boolean;
}
