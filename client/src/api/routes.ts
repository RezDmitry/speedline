import { SERVER_URL } from '../config/config';

export const API_URL = `${SERVER_URL}/api`;

export enum API_ROUTES {
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  WAREHOUSE = '/warehouse',
  PRODUCT = '/product',
}
