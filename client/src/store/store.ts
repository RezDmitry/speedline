import { combineReducers, configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './slices/WarehouseSlice';
import productReducer from './slices/ProductSlice';
import apiReducer from './slices/ApiSlice';

const rootReducer = combineReducers({
  warehouseReducer,
  productReducer,
  apiReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
