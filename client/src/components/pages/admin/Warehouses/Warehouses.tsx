import React, { useEffect, useState } from 'react';

import TableSample from '../TableSample/TableSample';
import TableRow from '../TableSample/TableRow/TableRow';
import AddWarehouse from '../../../common/modals/AddWarehouse/AddWarehouse';
import { filterList, tableHeaders } from './data';
import { useModal } from '../../../../hooks/useModal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { IWarehouse } from '../../../../typings/IWarehouse';
import { fetchWarehouses } from '../../../../store/slices/actionCreators/warehouse';
import { IFilterItem } from '../../../../typings/IFilterItem';

const Warehouses = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<IFilterItem>(filterList[0]);
  const { warehouses, isLoading, error } = useAppSelector((state) => state.warehouseReducer);
  const [isOpened, toggleOpened] = useModal();
  const prepareRow = (warehouse: IWarehouse) => Object.entries(warehouse)
    .filter((item) => ((item[0] !== '_id') && (item[0] !== 'user') && (item[0] !== '__v')))
    .map((elem) => ((elem[0] === 'products') ? elem[1].length : elem[1]));
  useEffect(() => {
    dispatch(fetchWarehouses({ height: filter.value }));
  }, [filter, isOpened]);
  return (
    <TableSample
      title="Warehouses"
      filterList={filterList}
      buttonText="Add a warehouse"
      filterValue={filter}
      clickFilter={setFilter}
      addItemModal={{
        toggleOpened,
        content: <AddWarehouse close={toggleOpened} />,
        isOpened,
      }}
    >
      <TableRow array={tableHeaders} id="-1" />
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {warehouses.length
        ? warehouses.map((warehouse) => (
          <TableRow
            array={prepareRow(warehouse)}
            key={warehouse._id}
            id={warehouse._id}
            link={warehouse._id}
          />
        ))
        : <span>No warehouses founded</span>}
    </TableSample>
  );
};

export default Warehouses;
