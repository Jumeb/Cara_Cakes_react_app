import {SET_USER, SET_TOKEN, SET_BAKERID} from '../types';

const INITIAL_STATE = {
  token: '',
  user: {},
  bakerId: '',
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      const user = action.payload;
      return {...state, user: {...user}};
    case SET_TOKEN:
      const token = action.payload;
      return {...state, token};
    case SET_BAKERID: 
        const bakerId = action.payload;
        return {...state, bakerId};
    default:
      return state;
  }
};

export default AuthReducer;
