import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { API_ROUTES } from '../../../api/routes';

export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (warehouseId: string, thunkAPI) => {
    try {
      const response = await api.get(API_ROUTES.PRODUCT);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);
