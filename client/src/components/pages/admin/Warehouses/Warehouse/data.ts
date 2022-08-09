import { IFilterItem } from '../../../../../typings/IFilterItem';

export const tableHeaders = [
  'All products', 'Manufacturer', 'Item number', 'Purchasing technology', 'Shipment method', 'Payment method',
];

export const filterList: IFilterItem [] = [
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
