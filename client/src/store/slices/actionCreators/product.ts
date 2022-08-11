import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { api } from '../../../api';
import { API_ROUTES } from '../../../api/routes';
import { IParams } from '../../../typings/IParams';

export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (params: IParams, thunkAPI) => {
    try {
      const response = await api.get(API_ROUTES.PRODUCT, { params });
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue(e.response?.data.message);
      }
      throw e;
    }
  },
);
