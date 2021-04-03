import {SET_USER, SET_TOKEN, SET_BAKERID, RESET} from '../types';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setBaker = (id) => {
  return {
    type: SET_BAKERID,
    payload: id,
  }
}

export const resetUser = () => {
  return {
    type: RESET
  }
}