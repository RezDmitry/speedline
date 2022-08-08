import React, { useEffect, useState } from 'react';

import TableSample from '../TableSample/TableSample';
import TableRow from '../TableSample/TableRow/TableRow';
import AddWarehouse from '../../../common/modals/AddWarehouse/AddWarehouse';
import { tableHeaders } from './data';
import { useModal } from '../../../../hooks/useModal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { IWarehouse } from '../../../../typings/Warehouse';
import { fetchWarehouses } from '../../../../store/slices/actionCreators/warehouse';

const Warehouses = () => {
  const dispatch = useAppDispatch();
  const [weight, setWeight] = useState<string>('Filter by');
  const { warehouses, isLoading, error } = useAppSelector((state) => state.warehouseReducer);
  const [isOpened, toggleOpened] = useModal();
  const prepareRow = (warehouse: IWarehouse) => Object.entries(warehouse)
    .filter((item) => ((item[0] !== '_id') && (item[0] !== 'user') && (item[0] !== '__v')))
    .map((elem) => ((elem[0] === 'products') ? elem[1].length : elem[1]));
  useEffect(() => {
    dispatch(fetchWarehouses());
  }, []);
  return (
    <TableSample
      title="Warehouses"
      filterList={['Filter by', 'Lower height', 'Higher height']}
      buttonText="Add a warehouse"
      filterValue={weight}
      clickFilter={(e: React.MouseEvent<HTMLInputElement>) => setWeight(e.currentTarget.value)}
      addItemModal={{
        toggleOpened,
        content: <AddWarehouse close={toggleOpened} />,
        isOpened,
      }}
    >
      <TableRow array={tableHeaders} id="-1" />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {
        !!warehouses.length && warehouses.map((warehouse) => (
          <TableRow
            array={prepareRow(warehouse)}
            key={warehouse._id}
            id={warehouse._id}
            link={warehouse.name}
          />
        ))
      }
    </TableSample>
  );
};

export default Warehouses;
