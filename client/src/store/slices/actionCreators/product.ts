import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { API_ROUTES } from '../../../api/routes';

export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (params: any, thunkAPI) => {
    try {
      const response = await api.get(API_ROUTES.PRODUCT, { params });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);
