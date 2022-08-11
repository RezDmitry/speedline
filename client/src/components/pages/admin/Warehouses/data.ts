import { IEntity } from '../../../../typings/IEntity';

export const tableHeaders = ['All Stores', 'Number of products', 'Length, m', 'Width, m', 'Height, m'];

export const filterList: IEntity [] = [
  {
    _id: 'any',
    name: 'Sort by',
  },
  {
    _id: '1',
    name: 'Min height',
  },
  {
    _id: '-1',
    name: 'Max height',
  },
];

