import { FC } from 'react';

import cn from 'lib/analytics/classnames';

import type { TableProps } from './types';

export const Table: FC<TableProps> = ({ data, textLeft }: TableProps) => {
  const rows = data.columns.map((column, index) => {
    const cells = Object.entries(column).map(([key, value]) => (
      <td
        key={`${key}-${index}`}
        className={cn({
          'whitespace-nowrap p-2 text-right': true,
          'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
          'text-left': !!textLeft,
        })}
      >
        {value}
      </td>
    ));
    return <tr key={`row-${index}`}>{cells}</tr>;
  });

  return (
    <div className="relative w-full overflow-x-auto py-5 text-xl text-cobalt-0">
      <table className="w-full text-left text-sm">
        <thead className="border-b-2 border-cobalt-0">
          <tr>
            {data.headings.map((heading) => (
              <th
                key={heading}
                scope="col"
                className={cn({
                  'min-w-[100px] px-2': true,
                  'text-left': !!textLeft,
                })}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
