import { FC } from 'react';

import cn from 'lib/analytics/classnames';

import type { TableProps } from './types';

export const Table: FC<TableProps> = ({ data, footer }: TableProps) => {
  console.log(data);
  const rows = data.columns.map((column, index) => {
    const cells = Object.entries(column).map(([key, value]) => (
      <td
        key={`${key}-${index}`}
        className={cn({
          'p-2 text-right align-top first:max-w-[100px] first:text-left': true,
          'bg-cobalt-0 bg-opacity-5': index % 2 !== 0,
          'pl-8': data?.sections?.includes(value),
          'font-bold': index === data.columns.length - 1 && footer,
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
                  'px-2 text-right first:text-left': true,
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
