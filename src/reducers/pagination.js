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
