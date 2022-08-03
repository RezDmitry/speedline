import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import TableRow from '../../TableSample/TableRow/TableRow';
import TableSample from '../../TableSample/TableSample';
import { useModal } from '../../../../../hooks/useModal';
import { mockData, tableHeaders } from './data';
import AddProduct from '../../../../common/modals/AddProduct/AddProduct';

const Warehouse = () => {
  const { id } = useParams();
  const [shipment, setShipment] = useState<string>('Filter by');
  const [array, setArray] = useState<any []>(mockData);
  const [isModalOpened, toggleModal] = useModal();
  const prepareData = (arr: any []) => {
    if (shipment === 'Filter by') return arr;
    return arr.filter((elem) => elem.method === shipment);
  };
  const addProduct = (value: any) => {
    setArray((prev) => prev.concat(value));
  };
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
    >
      <TableRow array={tableHeaders} id="-1" />
      {
        prepareData(array)
          .map((item) => <TableRow array={Object.values(item)} key={item.id} id={item.id.toString()} />)
      }
    </TableSample>
  );
};

export default Warehouse;
