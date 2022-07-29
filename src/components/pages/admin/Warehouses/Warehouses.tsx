import React, { useState } from 'react';

import TableSample from '../TableSample/TableSample';

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
      Table
    </TableSample>
  );
};

export default Warehouses;
