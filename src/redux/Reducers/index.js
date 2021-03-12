import { combineReducers } from 'redux';

import Auth from './Auth.reducer';
import DataReducer from './Data.reducer';

export default combineReducers({
  auth: Auth,
  data: DataReducer,
});