import {configureStore} from '@reduxjs/toolkit';
import bookmovieReducer from './bookmovieSlice';
const store=configureStore({
reducer:{
    bookmovie:bookmovieReducer,
}
   
})
export default store; 
