import { combineReducers } from "redux";
import { reducer as formReduser } from 'redux-form';
import users from './users';
import usersFetchingState from './usersFetchingState';
import pagination from './pagination';
import uiState from './uiState';

export default combineReducers({
  users,
  usersFetchingState,
  pagination,
  uiState,
  form: formReduser,
});
