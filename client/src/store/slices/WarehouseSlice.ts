import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWarehouse } from '../../typings/IWarehouse';
import { fetchWarehouse, fetchWarehouses } from './actionCreators/warehouse';

interface IWarehouseState {
  warehouses: IWarehouse [],
  isLoading: boolean,
  error: string,
  warehouse: IWarehouse | null,
}

export const initialState: IWarehouseState = {
  warehouses: [],
  isLoading: false,
  error: '',
  warehouse: null,
};

export const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState,
  reducers: {},
  extraReducers: {
    // fetchAll
    [fetchWarehouses.fulfilled.type]: (state, action: PayloadAction<IWarehouse []>) => {
      state.isLoading = false;
      state.error = '';
      state.warehouses = action.payload;
    },
    [fetchWarehouses.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchWarehouses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchWarehouse.fulfilled.type]: (state, action: PayloadAction<IWarehouse>) => {
      state.isLoading = false;
      state.error = '';
      state.warehouse = action.payload;
    },
    [fetchWarehouse.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchWarehouse.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default warehouseSlice.reducer;
