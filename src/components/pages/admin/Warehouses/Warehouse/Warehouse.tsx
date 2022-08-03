import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import TableRow from '../../TableSample/TableRow/TableRow';
import TableSample from '../../TableSample/TableSample';
import { useModal } from '../../../../../hooks/useModal';
import { mockData, tableHeaders } from './data';
import AddProduct from '../../../../common/modals/AddProduct/AddProduct';
import { useSelectRows } from '../../../../../hooks/useSelectRows';

const Warehouse = () => {
  const { id } = useParams();
  const [shipment, setShipment] = useState<string>('Filter by');
  const [array, setArray] = useState<any []>(mockData);
  const [isModalOpened, toggleModal] = useModal();
  const prepareData = () => {
    if (shipment === 'Filter by') {
      setArray(mockData);
    } else {
      setArray((prev) => prev.filter((elem) => elem.method === shipment));
    }
  };
  const addProduct = (value: any) => {
    setArray((prev) => prev.concat(value));
  };
  const [selected, changeSelect, selectAllRows, checkSelection] = useSelectRows(array, shipment, prepareData);
  return (
    <TableSample
      title={id!}
      filterList={['Filter by', 'AIR', 'SEA', 'TRUCK']}
      buttonText="Add cargo"
      filterValue={shipment}
      clickFilter={(e: React.MouseEvent<HTMLInputElement>) => setShipment(e.currentTarget.value)}
      modal={<AddProduct close={toggleModal} addProduct={addProduct} />}
      toggleModal={toggleModal}
      isModalOpened={isModalOpened}
      selected={selected}
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
