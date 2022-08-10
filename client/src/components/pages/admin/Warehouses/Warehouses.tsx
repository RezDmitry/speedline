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
import { ignoredFields } from '../../../../helpers/ignoredFields';
import { useSelectRows } from '../../../../hooks/useSelectRows';
import { api } from '../../../../api';
import { API_ROUTES } from '../../../../api/routes';

const Warehouses = () => {
  // hooks
  const dispatch = useAppDispatch();
  const { warehouses, isLoading, error } = useAppSelector((state) => state.warehouseReducer);
  const [selected, toggleRow, toggleAllRows, clearSelected] = useSelectRows();
  // useState
  const [filter, setFilter] = useState<IFilterItem>(filterList[0]);
  // modals
  const [isOpened, toggleOpened] = useModal();
  // functions
  const prepareRow = (warehouse: IWarehouse) => Object.entries(warehouse)
    .filter((item) => !ignoredFields.some((el) => el === item[0]))
    .map((elem) => ((elem[0] === 'products') ? elem[1].length : elem[1]));
  const deleteWarehouses = () => {
    selected.forEach(async (warehouse: IWarehouse) => {
      await api.delete(`${API_ROUTES.WAREHOUSE}/${warehouse._id}`);
      dispatch(fetchWarehouses({ height: filter._id }));
      clearSelected();
    });
  };
  // effects
  useEffect(() => {
    dispatch(fetchWarehouses({ height: filter._id }));
  }, [filter]);
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
      selected={selected}
      deleteItems={deleteWarehouses}
    >
      <TableRow
        array={tableHeaders}
        id="-1"
        selectAllRows={(e) => toggleAllRows(e, warehouses)}
      />
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {warehouses.length
        ? warehouses.map((warehouse) => (
          <TableRow
            array={prepareRow(warehouse)}
            key={warehouse._id}
            id={warehouse._id}
            link={warehouse._id}
            selectRow={() => toggleRow(warehouse)}
          />
        ))
        : <span>No warehouses founded</span>}
    </TableSample>
  );
};

export default Warehouses;
