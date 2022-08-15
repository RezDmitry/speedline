import { combineReducers, configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './slices/WarehouseSlice';
import productReducer from './slices/ProductSlice';
import themeReducer from './slices/ThemeSlice';

const rootReducer = combineReducers({
  warehouseReducer,
  productReducer,
  themeReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
