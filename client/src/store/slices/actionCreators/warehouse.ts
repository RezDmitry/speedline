import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { API_ROUTES } from '../../../api/routes';

export const fetchWarehouses = createAsyncThunk(
  'warehouse/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(API_ROUTES.WAREHOUSE);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);
