import { IEntity } from '../../../../../typings/IEntity';

export const tableHeaders = [
  'All products', 'Manufacturer', 'Item number', 'Purchasing technology', 'Shipment method', 'Payment method',
];

export const filterList: IEntity [] = [
  {
    _id: 'any',
    name: 'Filter by',
  },
  {
    _id: 'AIR',
    name: 'AIR',
  },
  {
    _id: 'SEA',
    name: 'SEA',
  },
  {
    _id: 'TRUCK',
    name: 'TRUCK',
  },
];
