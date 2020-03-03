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
}, { byId: {}, allIds: [] });

export default combineReducers({
  users,
  form: formReduser,
});
