import {SET_USER, SET_TOKEN} from '../types';

const INITIAL_STATE = {
  token: '',
  user: {},
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      const user = action.payload;
      return {...state, user: {...user}};
    case SET_TOKEN:
      const token = action.payload;
      return {...state, token};
    default:
      return state;
  }
};

export default AuthReducer;
