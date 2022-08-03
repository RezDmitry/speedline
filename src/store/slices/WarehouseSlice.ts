import { createSlice } from '@reduxjs/toolkit';
import { IWarehouse } from '../../typings/Warehouse';
import { productsW1, productsW2 } from '../../components/pages/admin/Warehouses/Warehouse/data';

export const initialState: IWarehouse [] = [
  {
    id: '153525',
    name: 'Warehouse No. 1',
    number: 120,
    length: 20,
    width: 20,
    height: 123,
    products: productsW1,
  },
  {
    id: '121111',
    name: 'Warehouse No. 2',
    number: 120,
    length: 20,
    width: 20,
    height: 3213,
    products: productsW2,
  },
  {
    id: '132',
    name: 'Warehouse No. 3',
    number: 120,
    length: 20,
    width: 20,
    height: 222,
    products: [],
  },
  {
    id: '1321',
    name: 'Warehouse No. 4',
    number: 120,
    length: 20,
    width: 20,
    height: 321,
    products: [],
  },
  {
    id: '12131',
    name: 'Warehouse No. 5',
    number: 120,
    length: 20,
    width: 20,
    height: 4444,
    products: [],
  },
  {
    id: '14342',
    name: 'Warehouse No. 6',
    number: 120,
    length: 20,
    width: 20,
    height: 111,
    products: [],
  },
  {
    id: '15435',
    name: 'Warehouse No. 7',
    number: 120,
    length: 20,
    width: 20,
    height: 20,
    products: [],
  },
  {
    id: '1432',
    name: 'Warehouse No. 8',
    number: 120,
    length: 20,
    width: 20,
    height: 20,
    products: [],
  },
  {
    id: '1555',
    name: 'Warehouse No. 9',
    number: 120,
    length: 20,
    width: 20,
    height: 20,
    products: [],
  },
  {
    id: '114325',
    name: 'Warehouse No. 10',
    number: 120,
    length: 20,
    width: 20,
    height: 20,
    products: [],
  },
];

export const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState,
  reducers: {
    replaceProduct(state, action: any) {
      const { warehouseFrom, warehouseIn, newItems } = action.payload;
      const warehouseFromIndex = state.findIndex((item) => item.name === warehouseFrom);
      state[warehouseFromIndex].products = state[warehouseFromIndex].products
        .filter((elem) => !newItems.some((item: any) => item.id === elem.id));
      const warehouseInIndex = state.findIndex((item) => item.name === warehouseIn);
      state[warehouseInIndex].products = state[warehouseInIndex].products.concat(newItems);
    },
  },
});

export default warehouseSlice.reducer;
export const { replaceProduct } = warehouseSlice.actions;
