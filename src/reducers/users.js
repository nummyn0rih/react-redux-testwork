import { handleActions } from "redux-actions";
import * as actions from '../actions';

const users = handleActions({
  [actions.addUser](state, { payload: { user } }) {
    const { byId } = state;
    return { byId: { ...byId, [user.id]: user } };
  },
  [actions.fetchUsersSmallDataSetSuccess](state, { payload }) {
    const { byId } = state;
    const users = payload.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
    return { byId: { ...byId, ...users }  };
  },
  [actions.fetchUsersLargeDataSetSuccess](state, { payload }) {
    const { byId } = state;
    const users = payload.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
    return { byId: { ...byId, ...users }  };
  },
  [actions.showUserCard](state, { payload: { id } }) {
    const { byId } = state;
    return { ...state, activeUserCard: byId[id] };
  },
  [actions.deleteUsers]() {
    return { byId: {}, activeUserCard: null, };
  },
}, {
  byId: {},
  activeUserCard: null,
});

export default users;
