import { configureStore } from '@reduxjs/toolkit';
import bookmovieReducer from './bookmovieSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    bookmovie: bookmovieReducer, // Set the bookmovieReducer as the reducer for 'bookmovie' state
  },
});

export default store;
