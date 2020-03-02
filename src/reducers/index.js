import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from '../actions';

const users = handleActions({
  [actions.addUser](state, { payload: { user } }) {
    return {
      ...state, ...user,
    };
  },
}, {});

export default combineReducers({
  users,
});
