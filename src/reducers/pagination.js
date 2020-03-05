import { handleActions } from "redux-actions";
import * as actions from '../actions';

const pagination = handleActions({
  [actions.addUser](state, { payload: { user } }) {
    const { allIds, pageLimit } = state;
    const totalPages = Math.ceil(allIds.length / pageLimit);
    return { ...state, allIds: [user.id, ...allIds], totalPages };
  },
  [actions.fetchUsersSuccess](state, { payload }) {
    const { allIds, pageLimit } = state;
    const ids = payload.map((user) => user.id);
    const newAllIds = [...allIds, ...ids];
    const totalPages = Math.ceil(newAllIds.length / pageLimit);
    return { ...state, allIds: newAllIds, totalPages};
  },
  [actions.sortUsers](state, { payload: { type, order, byId } }) {
  const { allIds } = state;
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
      throw new Error(`Unknown order state: '${order}'!`);
    }
  },
  [actions.filterUsers](state, { payload: { filter, byId } }) {
    const { allIds, pageLimit } = state;
    const filtredUsers = allIds.filter((id) => {
      const values = Object.values(byId[id]).map((i) => i.toString());
      for (const value of values) {
        if (value.includes(filter)) {
          return true;
        }
      }
      return false;
    });
    const totalPages = Math.ceil(filtredUsers.length / pageLimit);
    return { ...state, allIds: filtredUsers, totalPages };
  },
  [actions.deleteUsers]() {
    return { allIds: [], pageLimit: 10, totalPages: 1, currentPage: 1, };
  },
  [actions.changePage](state, { payload: { page } }) {
    return { ...state, currentPage: page };
  },
}, {
  allIds: [],
  pageLimit: 10,
  totalPages: 1,
  currentPage: 1,
});

export default pagination;
