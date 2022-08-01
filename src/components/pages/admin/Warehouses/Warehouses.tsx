import React, { useState } from 'react';

import TableSample from '../TableSample/TableSample';
import TableRow from '../TableSample/TableRow/TableRow';
import { mockData, tableHeaders } from './data';

const Warehouses = () => {
  const [weight, setWeight] = useState<string>('Filter by');
  const prepareData = (mock: any []) => {
    if (weight === 'Lower height') {
      return mock.sort((a, b) => a.height - b.height);
    } if (weight === 'Higher height') {
      return mock.sort((a, b) => b.height - a.height);
    }
    return mock;
  };
  return (
    <TableSample
      title="Warehouses"
      filterList={['Filter by', 'Lower height', 'Higher height']}
      buttonText="Add a warehouse"
      filterValue={weight}
      clickFilter={(e: React.MouseEvent<HTMLInputElement>) => setWeight(e.currentTarget.value)}
    >
      <TableRow array={tableHeaders} id="-1" />
      {
        prepareData(mockData)
          .map((item) => <TableRow array={Object.values(item)} key={item.id} id={item.id.toString()} />)
      }
    </TableSample>
  );
};

export default Warehouses;
