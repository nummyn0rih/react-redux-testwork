import { handleActions } from "redux-actions";
import * as actions from '../actions';

const uiState = handleActions({
  [actions.showNewUserForm](state) {
    return { ...state, newUserForm: 'show', addUserBtn: 'hide' };
  },
  [actions.hideNewUserForm](state) {
    return { ...state, newUserForm: 'hide', addUserBtn: 'show' };
  },
  [actions.addUser](state) {
    return { ...state, newUserForm: 'hide', addUserBtn: 'show' };
  },
  [actions.sortUsers](state, { payload: { type } }) {
    const { orderBy } = state;
    const newOrderBy = { ...orderBy, [type]: orderBy[type] === 'asc' ? 'desc' : 'asc' };
    return { ...state, orderBy: { ...newOrderBy }, activeOrder: type };
  },
}, {
  newUserForm: 'hide',
  addUserBtn: 'show',
  orderBy: {
    id: 'asc',
    firstName: 'asc',
    lastName: 'asc',
    email: 'asc',
    phone: 'asc',
  },
  activeOrder: 'none',
});

export default uiState;
