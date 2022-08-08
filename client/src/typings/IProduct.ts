export interface IProduct {
  _id: string,
  name: string,
  manufacturer: string,
  number: string,
  purchasingTechnology: 'A' | 'S' | 'D' | 'F',
  shippingMethod: 'AIR' | 'SEA'| 'TRUCK',
  paymentMethod: string,
  warehouse: string,
}
