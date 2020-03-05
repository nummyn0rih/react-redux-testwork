import { handleActions } from "redux-actions";
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
    return { byId: {}, allIds: [], activeUserCard: null, };
  },
}, {
  byId: {},
  allIds: [],
  activeUserCard: null,
});

export default users;
