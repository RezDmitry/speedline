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

const Warehouse = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [shipmentMethod, setShipmentMethod] = useState<IFilterItem>(filterList[0]);
  const [isOpened, toggleOpened] = useModal();
  const [isOpenedMove, toggleOpenedMove] = useModal();
  const { products, isLoading, error } = useAppSelector((state) => state.productReducer);
  const { warehouse } = useAppSelector((state) => state.warehouseReducer);
  const prepareRow = (product: IProduct) => Object.entries(product)
    .filter((item) => !ignoredFields.some((el) => el === item[0]))
    .map((elem) => elem[1]);
  useEffect(() => {
    dispatch(fetchProducts({ warehouse: id, shipmentMethod: shipmentMethod.value }));
    dispatch(fetchWarehouse(id!));
  }, [id, shipmentMethod, isOpened, isOpenedMove]);
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
          />
        ))
        : !isLoading && !error && <span>No products founded</span>}
    </TableSample>
  );
};

export default Warehouse;
