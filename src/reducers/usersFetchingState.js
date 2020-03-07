import { handleActions } from "redux-actions";
import * as actions from '../actions';

const usersFetchingState = handleActions({
  [actions.fetchUsersRequest]() {
    return 'requested';
  },
  [actions.fetchUsersSuccess]() {
    return 'finished';
  },
  [actions.fetchUsersFailure]() {
    return 'failed';
  },
}, 'none');

export default usersFetchingState;
