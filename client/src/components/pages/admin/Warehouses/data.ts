import { IFilterItem } from '../../../../typings/IFilterItem';

export const tableHeaders = ['All Stores', 'Number of products', 'Length, m', 'Width, m', 'Height, m'];

export const filterList: IFilterItem [] = [
  {
    value: '',
    text: 'Sort by',
  },
  {
    value: '1',
    text: 'Min height',
  },
  {
    value: '-1',
    text: 'Max height',
  },
];

