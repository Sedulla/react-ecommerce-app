import {
  loginFailure,
  loginStart,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
  signUpStart,
} from './userSlice';
import axios from 'axios';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const signUp = async (dispatch, user) => {
  dispatch(signUpStart());
  try {
    const res = await axios.post('http://localhost:5000/api/auth/signup', user);
    dispatch(signUpSuccess(res.data));
  } catch (err) {
    dispatch(signUpFailure());
  }
};
