import { IProduct } from './IProduct';

export interface IWarehouse {
  _id: string,
  name: string,
  products: IProduct [],
  length: number,
  width: number,
  height: number,
}
