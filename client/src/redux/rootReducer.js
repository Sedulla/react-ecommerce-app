import { combineReducers } from '@reduxjs/toolkit';

// reducers
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
