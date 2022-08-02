import React, { useState } from 'react';

import TableSample from '../TableSample/TableSample';
import TableRow from '../TableSample/TableRow/TableRow';
import AddWarehouse from '../../../common/modals/AddWarehouse/AddWarehouse';
import { mockData, tableHeaders } from './data';
import { useModal } from '../../../../hooks/useModal';

const Warehouses = () => {
  const [weight, setWeight] = useState<string>('Filter by');
  const [array, setArray] = useState<any []>(mockData);
  const [isModalOpened, toggleModal] = useModal();
  const prepareData = (arr: any []) => {
    if (weight === 'Lower height') {
      return arr.sort((a, b) => a.height - b.height);
    } if (weight === 'Higher height') {
      return arr.sort((a, b) => b.height - a.height);
    }
    return arr;
  };
  const addWarehouse = (value: any) => {
    setArray((prev) => prev.concat(value));
  };
  return (
    <TableSample
      title="Warehouses"
      filterList={['Filter by', 'Lower height', 'Higher height']}
      buttonText="Add a warehouse"
      filterValue={weight}
      clickFilter={(e: React.MouseEvent<HTMLInputElement>) => setWeight(e.currentTarget.value)}
      modal={<AddWarehouse close={toggleModal} addWarehouse={addWarehouse} />}
      toggleModal={toggleModal}
      isModalOpened={isModalOpened}
    >
      <TableRow array={tableHeaders} id="-1" />
      {
        prepareData(array)
          .map((item) => (
            <TableRow
              array={Object.values(item)}
              key={item.id}
              id={item.id.toString()}
              link={item.warehouse}
            />
          ))
      }
    </TableSample>
  );
};

export default Warehouses;
