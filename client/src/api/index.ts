import axios from 'axios';
import { API_URL } from './routes';
import { getCookie } from '../helpers/cookie';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    withCredentials: 'true',
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

api.defaults.headers.common.Authorization = `Bearer ${getCookie('token')}`;
