import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

// Configuring the Redux store with the todo reducer
export const store = configureStore({
  reducer: todoReducer,
})