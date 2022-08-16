import { IProduct } from './IProduct';
import { IEntity } from './IEntity';

export interface IWarehouse extends IEntity {
  products: IProduct [],
  length: number,
  width: number,
  height: number,
  createdAt: string,
  updatedAt: string,
}
