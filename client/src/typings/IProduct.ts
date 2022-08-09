export interface IProduct {
  _id: string,
  name: string,
  manufacturer: string,
  number: string,
  purchasingTechnology: 'A' | 'S' | 'D' | 'F',
  shipmentMethod: 'AIR' | 'SEA'| 'TRUCK',
  paymentMethod: string,
  warehouse: string,
}
