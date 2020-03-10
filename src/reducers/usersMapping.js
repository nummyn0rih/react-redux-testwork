import { handleActions } from 'redux-actions';
import uniq from 'lodash.uniq';
import clonedeep from 'lodash.clonedeep';
import * as actions from '../actions';

const usersMapping = handleActions(
	{
		[actions.addUser](state, { payload: { user } }) {
			const { allIds, pageLimit } = state;
			const newAllIds = [user.id, ...allIds];
			const totalPages = Math.ceil(newAllIds.length / pageLimit);
			return {
				...state,
				allIds: newAllIds,
				modifiedIds: newAllIds,
				totalPages,
			};
		},
		[actions.fetchUsersSmallDataSetSuccess](state, { payload }) {
			const { allIds, pageLimit } = state;
			const ids = uniq(payload.map(user => user.id));
			const newAllIds = [...ids, ...allIds];
			const totalPages = Math.ceil(newAllIds.length / pageLimit);
			return {
				...state,
				allIds: newAllIds,
				modifiedIds: newAllIds,
				totalPages,
			};
		},
		[actions.fetchUsersLargeDataSetSuccess](state, { payload }) {
			const { allIds, pageLimit } = state;
			const ids = uniq(payload.map(user => user.id));
			const newAllIds = [...ids, ...allIds];
			const totalPages = Math.ceil(newAllIds.length / pageLimit);
			return {
				...state,
				allIds: newAllIds,
				modifiedIds: newAllIds,
				totalPages,
			};
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
					return {
						...state,
						allIds: sortedIds,
						modifiedIds: sortedIds,
					};
				}
				case 'desc': {
					const sortedIds = [...allIds].sort((a, b) => {
						if (byId[a][type] < byId[b][type]) return 1;
						if (byId[a][type] > byId[b][type]) return -1;
						return 0;
					});
					return {
						...state,
						allIds: sortedIds,
						modifiedIds: sortedIds,
					};
				}
				default:
					throw new Error(`Unknown order state: '${order}'!`);
			}
		},
		[actions.filterUsers](state, { payload: { filter, byId } }) {
			const { allIds, pageLimit } = state;

			if (!filter) {
				const totalPages = Math.ceil(allIds.length / pageLimit);
				return { ...state, modifiedIds: allIds, totalPages };
			}

			const users = clonedeep(byId);
			for (const user in users) {
				delete users[user].address;
				delete users[user].description;
			}
			const filtredUsers = allIds.filter(id => {
				const values = Object.values(users[id]).map(i =>
					i.toString().toLowerCase()
				);
				for (const value of values) {
					if (value.includes(filter.toLowerCase())) {
						return true;
					}
				}
				return false;
			});
			const totalPages = Math.ceil(filtredUsers.length / pageLimit);
			return { ...state, modifiedIds: filtredUsers, totalPages };
		},
		[actions.deleteUsers]() {
			return {
				allIds: [],
				modifiedIds: [],
				pageLimit: 10,
				totalPages: 1,
				currentPage: 1,
			};
		},
		[actions.changePage](state, { payload: { page } }) {
			return { ...state, currentPage: page };
		},
		[actions.changePageLimit](state, { payload: { pageLimitValue } }) {
			const { allIds } = state;
			const pageLimit = Number.parseInt(pageLimitValue, 10);
			const totalPages = Math.ceil(allIds.length / pageLimitValue) || 1;
			return { ...state, pageLimit, totalPages };
		},
	},
	{
		allIds: [],
		modifiedIds: [],
		pageLimit: 10,
		totalPages: 1,
		currentPage: 1,
	}
);

export default usersMapping;
