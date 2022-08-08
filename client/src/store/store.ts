import { combineReducers, configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './slices/WarehouseSlice';
import productReducer from './slices/ProductSlice';

const rootReducer = combineReducers({
  warehouseReducer,
  productReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
