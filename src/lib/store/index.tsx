import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import viewportSilce from './slices/viewportSilce';

export const rootReducer = combineReducers({
  viewport: viewportSilce,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
