import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { reducer as formReduser } from 'redux-form';
import * as actions from '../actions';

const users = handleActions({
  [actions.addUser](state, { payload: { user } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [user.id]: user },
      allIds: [user.id, ...allIds],
    };
  },
  [actions.fetchUsersSuccess](state, { payload }) {
    const { byId, allIds } = state;
    const users = payload.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
    const ids = payload.map((user) => user.id);
    return {
      byId: { ...byId, ...users },
      allIds: [...allIds, ...ids],
    };
  },
  [actions.showUserCard](state, { payload: { id } }) {
    const { byId } = state;
    return { ...state, activeUserCard: byId[id] };
  },
  [actions.deleteUsers]() {
    return { byId: {}, allIds: [], activeUserCard: null };
  },
  [actions.sortUsers](state, { payload: { type, order } }) {
    const { byId, allIds } = state;
    switch (order) {
      case 'asc': {
        const sortedIds = [...allIds].sort((a, b) => {
          if (byId[a][type] > byId[b][type]) return 1;
          if (byId[a][type] < byId[b][type]) return -1;
          return 0;
        });
        return { ...state, allIds: sortedIds };
      }
      case 'desc': {
        const sortedIds = [...allIds].sort((a, b) => {
          if (byId[a][type] < byId[b][type]) return 1;
          if (byId[a][type] > byId[b][type]) return -1;
          return 0;
        });
        return { ...state, allIds: sortedIds };
      }
      default:
        return state;
    }
  }
}, { byId: {}, allIds: [], activeUserCard: null });

const usersFetchingState = handleActions({
  [actions.fetchUsersRequest]() {
    return 'requested';
  },
  [actions.fetchUsersFailure]() {
    return 'failed';
  },
  [actions.fetchUsersSuccess]() {
    return 'finished';
  },
}, 'none');

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

export default combineReducers({
  users,
  usersFetchingState,
  uiState,
  form: formReduser,
});
