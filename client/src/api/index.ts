import axios from 'axios';
import { API_URL } from './routes';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    withCredentials: 'true',
  },
});
