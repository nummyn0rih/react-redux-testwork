import axios from 'axios';
import { createAction } from "redux-actions";

export const addUser = createAction('USER_ADD');
export const deleteUsers = createAction('USERS_DELETE');
export const sortUsers = createAction('USERS_SORT');
export const filterUsers = createAction('USERS_FILTER');

export const fetchUsersRequest = createAction('USERS_FETCH_REQUEST');
export const fetchUsersSuccess = createAction('USERS_FETCH_SUCCESS');
export const fetchUsersFailure = createAction('USERS_FETCH_FAILURE');

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const response = await axios.get(url);
    dispatch(fetchUsersSuccess(response.data)); 
  } catch (e) {
    dispatch(fetchUsersFailure());
    console.log(e);
    throw e;
  }
};

export const showNewUserForm = createAction('NEW_USER_FORM_SHOW');
export const hideNewUserForm = createAction('NEW_USER_FORM_HIDE');

export const hideAddUserBtn = createAction('USER_ADD_BUTTON_HIDE');

export const showUserCard = createAction('USER_CARD_SHOW');

export const initPagination = createAction('PAGINATION_INITIAL');
export const changePage = createAction('PAGE_CHANGE');
