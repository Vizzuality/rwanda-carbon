type dataTypes = {
  headings: (string | number)[];
  columns?: { [key: string]: number | string }[];
};

export interface TableProps {
  data: dataTypes;
}
