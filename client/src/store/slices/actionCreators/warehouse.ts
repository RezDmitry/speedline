import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { api } from '../../../api';
import { API_ROUTES } from '../../../api/routes';
import { IParams } from '../../../typings/IParams';

export const fetchWarehouses = createAsyncThunk(
  'warehouse/fetchAll',
  async (params: IParams, thunkAPI) => {
    try {
      const response = await api.get(API_ROUTES.WAREHOUSE, { params });
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue(e.response?.data.message);
      }
      throw e;
    }
  },
);

export const fetchWarehouse = createAsyncThunk(
  'warehouse/fetchOne',
  async (id: string, thunkAPI) => {
    try {
      const response = await api.get(`${API_ROUTES.WAREHOUSE}/${id}`);
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue(e.response?.data.message);
      }
      throw e;
    }
  },
);
