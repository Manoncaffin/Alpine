import { configureStore } from '@reduxjs/toolkit';
import configuratorReducer from '../reducers/configuratorSlice';

export const store = configureStore({
  reducer: {
    configurator: configuratorReducer,
  },
})
