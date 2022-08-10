import { createSlice } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { API_URL } from '../../api/routes';
import { getCookie } from '../../helpers/cookie';

interface IInitialState {
  api: AxiosInstance,
}

export const initialState: IInitialState = {
  api: axios.create({
    baseURL: API_URL,
    headers: {
      withCredentials: 'true',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  }),
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApi: (state) => {
      state.api = axios.create({
        baseURL: API_URL,
        headers: {
          withCredentials: 'true',
          Authorization: `Bearer ${getCookie('token')}`,
        },
      });
    },
  },
});

export default apiSlice.reducer;
export const { setApi } = apiSlice.actions;
