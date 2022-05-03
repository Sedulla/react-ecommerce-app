import {
  loginFailure,
  loginStart,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
  signUpStart,
} from './userSlice';
import axios from 'axios';
import { apiBaseUrl } from '../utils/config';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${apiBaseUrl}/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const signUp = async (dispatch, user) => {
  dispatch(signUpStart());
  try {
    const res = await axios.post(`${apiBaseUrl}/auth/signup`, user);
    dispatch(signUpSuccess(res.data));
  } catch (err) {
    dispatch(signUpFailure());
  }
};
