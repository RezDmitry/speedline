import { IEntity } from './IEntity';

export interface IProduct extends IEntity {
  manufacturer: string,
  number: string,
  purchasingTechnology: 'A' | 'S' | 'D' | 'F',
  shipmentMethod: 'AIR' | 'SEA'| 'TRUCK',
  paymentMethod: string,
  warehouse: string,
}
