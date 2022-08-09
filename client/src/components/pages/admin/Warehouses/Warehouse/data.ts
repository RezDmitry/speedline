import { IFilterItem } from '../../../../../typings/IFilterItem';

export const tableHeaders = [
  'All products', 'Manufacturer', 'Item number', 'Purchasing technology', 'Shipment method', 'Payment method',
];

export const filterList: IFilterItem [] = [
  {
    value: '',
    text: 'Filter by',
  },
  {
    value: 'AIR',
    text: 'AIR',
  },
  {
    value: 'SEA',
    text: 'SEA',
  },
  {
    value: 'TRUCK',
    text: 'TRUCK',
  },
];
