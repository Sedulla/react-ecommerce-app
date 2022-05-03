import { combineReducers } from '@reduxjs/toolkit';

// reducers
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
