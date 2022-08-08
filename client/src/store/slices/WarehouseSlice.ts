import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWarehouse } from '../../typings/Warehouse';
import { fetchWarehouses } from './actionCreators/warehouse';

interface IUserState {
  warehouses: IWarehouse [],
  isLoading: boolean,
  error: string,
}

export const initialState: IUserState = {
  warehouses: [],
  isLoading: false,
  error: '',
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
  },
});

export default warehouseSlice.reducer;
