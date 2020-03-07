import axios from 'axios';
import { createAction } from "redux-actions";

export const addUser = createAction('USER_ADD');
export const deleteUsers = createAction('USERS_DELETE');
export const sortUsers = createAction('USERS_SORT');
export const filterUsers = createAction('USERS_FILTER');

export const fetchUsersRequest = createAction('USERS_FETCH_REQUEST');
export const fetchUsersSuccess = createAction('USERS_FETCH_SUCCESS');
export const fetchUsersFailure = createAction('USERS_FETCH_FAILURE');

export const fetchUsers = (url) => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
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

export const changePage = createAction('PAGE_CHANGE');
export const changePageLimit = createAction('PAGE_LIMIT_CHANGE');
