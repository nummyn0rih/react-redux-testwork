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
  }
}, { byId: {}, allIds: [] });

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

const formsUIState = handleActions({
  [actions.showNewUserForm]() {
    return 'show';
  },
  [actions.hideNewUserForm]() {
    return 'hide';
  },
  [actions.addUser]() {
    return 'hide';
  },
}, 'hide');

export default combineReducers({
  users,
  usersFetchingState,
  formsUIState,
  form: formReduser,
});
