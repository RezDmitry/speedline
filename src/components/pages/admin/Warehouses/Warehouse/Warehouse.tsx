import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../hooks/useStore';
import TableRow from '../../TableSample/TableRow/TableRow';
import TableSample from '../../TableSample/TableSample';
import { useModal } from '../../../../../hooks/useModal';
import { tableHeaders } from './data';
import AddProduct from '../../../../common/modals/AddProduct/AddProduct';
import { useSelectRows } from '../../../../../hooks/useSelectRows';
import MoveProduct from '../../../../common/modals/MoveProduct/MoveProduct';

const Warehouse = () => {
  const { id } = useParams();
  const warehouses = useAppSelector((state) => state.warehouseReducer);
  const [shipment, setShipment] = useState<string>('Filter by');
  const [array, setArray] = useState<any []>(warehouses.find((item) => item.name === id)!.products);
  const [cashArray, setCashArray] = useState<any []>([]);
  const [isOpened, toggleOpened] = useModal();
  const [isOpenedMove, toggleOpenedMove] = useModal();
  const prepareData = () => {
    if (shipment === 'Filter by') {
      setArray(cashArray.concat(array));
    } else {
      setArray((prev) => prev.filter((elem) => elem.method === shipment));
      setCashArray(array.filter((elem) => elem.method !== shipment));
    }
  };
  const addProduct = (value: any) => {
    setArray((prev) => prev.concat(value));
  };
  const [
    selected, changeSelect, selectAllRows, checkSelection, clearSelect,
  ] = useSelectRows(array, shipment, prepareData);
  const deleteProducts = () => {
    setArray((prev) => prev.filter((elem) => !selected.some((item) => item.id === elem.id)));
    clearSelect();
    changeSelect({ id: '-1' });
  };
  return (
    <TableSample
      title={id!}
      filterList={['Filter by', 'AIR', 'SEA', 'TRUCK']}
      buttonText="Add cargo"
      filterValue={shipment}
      clickFilter={(e: React.MouseEvent<HTMLInputElement>) => setShipment(e.currentTarget.value)}
      addItemModal={{
        toggleOpened,
        content: <AddProduct close={toggleOpened} addProduct={addProduct} />,
        isOpened,
      }}
      moveItemModal={{
        toggleOpened: toggleOpenedMove,
        content: <MoveProduct close={toggleOpenedMove} products={selected} />,
        isOpened: isOpenedMove,
      }}
      selected={selected}
      deleteItems={deleteProducts}
    >
      <TableRow array={tableHeaders} id="-1" selectAllRows={selectAllRows} />
      {
        array.map((item) => (
          <TableRow
            selectRow={() => changeSelect(item)}
            array={Object.values(item)}
            key={item.id}
            id={item.id.toString()}
            isSelected={checkSelection(item)}
          />
        ))
      }
    </TableSample>
  );
};

export default Warehouse;
