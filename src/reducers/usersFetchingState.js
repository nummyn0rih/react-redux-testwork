import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const usersFetchingState = handleActions(
	{
		[actions.fetchUsersSmallDataSetRequest](state) {
			return { ...state, smallDataSet: 'requested' };
		},
		[actions.fetchUsersLargeDataSetRequest](state) {
			return { ...state, largeDataSet: 'requested' };
		},
		[actions.fetchUsersSmallDataSetSuccess](state) {
			return { ...state, smallDataSet: 'finished' };
		},
		[actions.fetchUsersLargeDataSetSuccess](state) {
			return { ...state, largeDataSet: 'finished' };
		},
		[actions.fetchUsersSmallDataSetFailure](state) {
			return { ...state, smallDataSet: 'failed' };
		},
		[actions.fetchUsersLargeDataSetFailure](state) {
			return { ...state, largeDataSet: 'failed' };
		},
	},
	{
		smallDataSet: 'none',
		largeDataSet: 'none',
	}
);

export default usersFetchingState;
