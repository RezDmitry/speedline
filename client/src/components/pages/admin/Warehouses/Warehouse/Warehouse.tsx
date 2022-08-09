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
import { fetchWarehouse } from '../../../../../store/slices/actionCreators/warehouse';
import { IFilterItem } from '../../../../../typings/IFilterItem';
import { ignoredFields } from '../../../../../helpers/ignoredFields';
import { useSelectRows } from '../../../../../hooks/useSelectRows';
import { api } from '../../../../../api';
import { API_ROUTES } from '../../../../../api/routes';

const Warehouse = () => {
  // hooks
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { products, isLoading, error } = useAppSelector((state) => state.productReducer);
  const { warehouse } = useAppSelector((state) => state.warehouseReducer);
  const [selected, toggleRow, clearSelected] = useSelectRows();
  // useState
  const [shipmentMethod, setShipmentMethod] = useState<IFilterItem>(filterList[0]);
  // modals
  const [isOpened, toggleOpened] = useModal();
  const [isOpenedMove, toggleOpenedMove] = useModal();
  // functions
  const prepareRow = (product: IProduct) => Object.entries(product)
    .filter((item) => !ignoredFields.some((el) => el === item[0]))
    .map((elem) => elem[1]);
  const deleteProducts = () => {
    selected.forEach(async (product: IProduct) => {
      await api.delete(`${API_ROUTES.PRODUCT}/${product._id}`);
      dispatch(fetchProducts({ warehouse: id, shipmentMethod: shipmentMethod.value }));
      clearSelected();
    });
  };
  // effects
  useEffect(() => {
    dispatch(fetchWarehouse(id!));
  }, [id]);
  useEffect(() => {
    dispatch(fetchProducts({ warehouse: id, shipmentMethod: shipmentMethod.value }));
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
        content: <MoveProduct close={toggleOpenedMove} products={['']} />,
        isOpened: isOpenedMove,
      }}
      selected={selected}
      deleteItems={deleteProducts}
    >
      <TableRow array={tableHeaders} id="-1" />
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {products.length
        ? products.map((product) => (
          <TableRow
            array={prepareRow(product)}
            key={product._id}
            id={product._id}
            selectRow={() => toggleRow(product)}
          />
        ))
        : !isLoading && !error && <span>No products founded</span>}
    </TableSample>
  );
};

export default Warehouse;
