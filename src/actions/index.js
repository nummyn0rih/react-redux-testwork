import axios from 'axios';
import { createAction } from 'redux-actions';

export const addUser = createAction('USER_ADD');
export const deleteUsers = createAction('USERS_DELETE');
export const sortUsers = createAction('USERS_SORT');
export const filterUsers = createAction('USERS_FILTER');

export const fetchUsersSmallDataSetRequest = createAction(
	'USERS_FETCH_SMALL_DATA_REQUEST'
);
export const fetchUsersSmallDataSetSuccess = createAction(
	'USERS_FETCH_SMALL_DATA_SUCCESS'
);
export const fetchUsersSmallDataSetFailure = createAction(
	'USERS_FETCH_SMALL_DATA_FAILURE'
);
export const fetchUsersLargeDataSetRequest = createAction(
	'USERS_FETCH_LARGE_DATA_REQUEST'
);
export const fetchUsersLargeDataSetSuccess = createAction(
	'USERS_FETCH_LARGE_DATA_SUCCESS'
);
export const fetchUsersLargeDataSetFailure = createAction(
	'USERS_FETCH_LARGE_DATA_FAILURE'
);

export const fetchUsersSmallDataSet = url => async dispatch => {
	dispatch(fetchUsersSmallDataSetRequest());
	try {
		const response = await axios.get(url);
		dispatch(fetchUsersSmallDataSetSuccess(response.data));
	} catch (e) {
		dispatch(fetchUsersSmallDataSetFailure());
		console.log(e);
		throw e;
	}
};

export const fetchUsersLargeDataSet = url => async dispatch => {
	dispatch(fetchUsersLargeDataSetRequest());
	try {
		const response = await axios.get(url);
		dispatch(fetchUsersLargeDataSetSuccess(response.data));
	} catch (e) {
		dispatch(fetchUsersLargeDataSetFailure());
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
