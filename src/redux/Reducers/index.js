import { combineReducers } from 'redux';

import Auth from './Auth.reducer';
import DataReducer from './Data.reducer';
import RefreshReducer from './Refresh.reducer';

export default combineReducers({
  auth: Auth,
  data: DataReducer,
  refresh: RefreshReducer,
});