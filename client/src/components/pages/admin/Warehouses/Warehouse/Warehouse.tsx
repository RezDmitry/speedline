import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TableRow from '../../TableSample/TableRow/TableRow';
import TableSample from '../../TableSample/TableSample';
import { useModal } from '../../../../../hooks/useModal';
import { filterList, tableHeaders } from './data';
import AddProduct from '../../../../common/modals/AddProduct/AddProduct';
import MoveProduct from '../../../../common/modals/MoveProduct/MoveProduct';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/useStore';
import { IProduct } from '../../../../../typings/IProduct';
import { fetchProducts } from '../../../../../store/slices/actionCreators/product';
import { fetchWarehouse, fetchWarehouses } from '../../../../../store/slices/actionCreators/warehouse';
import { ignoredFields } from '../../../../../helpers/ignoredFields';
import { useSelectRows } from '../../../../../hooks/useSelectRows';
import { api } from '../../../../../api';
import { API_ROUTES } from '../../../../../api/routes';
import { IEntity } from '../../../../../typings/IEntity';

const Warehouse = () => {
  // hooks
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { products, isLoading, error } = useAppSelector((state) => state.productReducer);
  const { warehouses, warehouse } = useAppSelector((state) => state.warehouseReducer);
  const [selected, toggleRow, toggleAllRows, clearSelected] = useSelectRows();
  // useState
  const [shipmentMethod, setShipmentMethod] = useState<IEntity>(filterList[0]);
  // modals
  const [isOpened, toggleOpened] = useModal();
  const [isOpenedMove, toggleOpenedMove] = useModal();
  // functions
  const prepareRow = (product: IProduct) => Object.entries(product)
    .filter((item) => !ignoredFields.some((el) => el === item[0]))
    .map((elem) => elem[1]);
  const deleteProducts = () => {
    selected.forEach(async (product) => {
      await api.delete(`${API_ROUTES.PRODUCT}/${product._id}`);
      dispatch(fetchProducts({ warehouse: id!, shipmentMethod: shipmentMethod._id }));
      clearSelected();
    });
  };
  // effects
  useEffect(() => {
    dispatch(fetchWarehouse(id!));
    dispatch(fetchWarehouses({}));
  }, [id]);
  useEffect(() => {
    dispatch(fetchProducts({ warehouse: id!, shipmentMethod: shipmentMethod._id }));
  }, [shipmentMethod]);
  return (
    <TableSample
      title={warehouse?.name || ''}
      filterList={filterList}
      buttonText="Add cargo"
      filterValue={shipmentMethod}
      clickFilter={setShipmentMethod}
      addItemModal={{
        toggleOpened,
        content: <AddProduct close={toggleOpened} />,
        isOpened,
      }}
      moveItemModal={{
        toggleOpened: toggleOpenedMove,
        content: <MoveProduct close={toggleOpenedMove} products={selected} />,
        isOpened: isOpenedMove,
      }}
      selectedLength={selected.length}
      deleteItems={deleteProducts}
      isBlocked={warehouses.length === 1}
    >
      <TableRow
        array={tableHeaders}
        id="-1"
        selectAllRows={(e) => toggleAllRows(e, products)}
      />
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {products.length
        ? products.map((product) => (
          <TableRow
            array={prepareRow(product)}
            key={product._id}
            id={product._id}
            selectRow={() => toggleRow(product)}
            isSelected={selected.some((item) => item._id === product._id)}
          />
        ))
        : !isLoading && !error && <span>No products founded</span>}
    </TableSample>
  );
};

export default Warehouse;
