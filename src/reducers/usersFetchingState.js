import { handleActions } from "redux-actions";
import * as actions from '../actions';

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

export default usersFetchingState;
