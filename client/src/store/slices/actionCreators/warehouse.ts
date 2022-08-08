import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { API_ROUTES } from '../../../api/routes';

export const fetchWarehouses = createAsyncThunk(
  'warehouse/fetchAll',
  async (params: any, thunkAPI) => {
    try {
      const response = await api.get(API_ROUTES.WAREHOUSE, {
        params:
          { height: params.height || '-1' },
      });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);

export const fetchWarehouse = createAsyncThunk(
  'warehouse/fetchOne',
  async (id: string, thunkAPI) => {
    try {
      const response = await api.get(`${API_ROUTES.WAREHOUSE}/${id}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);
