export interface IChart {
  path: string,
  text: string,
}

export const charts: IChart [] = [
  {
    path: 'workload',
    text: 'Warehouse workload',
  },
  {
    path: 'quantity',
    text: 'Products quantity',
  },
];
