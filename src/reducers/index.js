import { combineReducers } from "redux";
import { reducer as formReduser } from 'redux-form';
import users from './users';
import usersFetchingState from './usersFetchingState';
import usersMapping from './usersMapping';
import uiState from './uiState';

export default combineReducers({
  users,
  usersFetchingState,
  usersMapping,
  uiState,
  form: formReduser,
});
