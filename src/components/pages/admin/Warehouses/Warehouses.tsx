import React, { useState } from 'react';

import TableSample from '../TableSample/TableSample';
import TableRow from '../TableSample/TableRow/TableRow';

import { mockData, tableHeaders } from './data';

const Warehouses = () => {
  const [weight, setWeight] = useState<string>('Filter by');
  return (
    <TableSample
      title="Warehouses"
      filterList={['Filter by', 'Lower weight', 'Higher weight']}
      buttonText="Add a warehouse"
      filterValue={weight}
      clickFilter={(e: React.MouseEvent<HTMLInputElement>) => setWeight(e.currentTarget.value)}
    >
      <TableRow array={tableHeaders} id="-1" />
      {mockData.map((item, i) => (i !== 0)
        && <TableRow array={Object.values(item)} key={item.id} id={item.id.toString()} />)}
    </TableSample>
  );
};

export default Warehouses;
