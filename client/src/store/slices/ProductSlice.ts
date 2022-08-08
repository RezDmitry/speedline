import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '../../typings/Product';
import { fetchProducts } from './actionCreators/product';

interface IProductState {
  products: IProduct [],
  isLoading: boolean,
  error: string,
}

export const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct []>) => {
      state.isLoading = false;
      state.error = '';
      state.products = action.payload;
    },
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
