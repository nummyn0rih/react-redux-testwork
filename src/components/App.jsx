import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import NewUserForm from './NewUserForm';
import FilterForm from './FilterForm';
import Table from './Table';
import UserCard from './UserCard';
import * as actions from '../actions';
import routes from '../routes';
import '../App.css';

const mapStateToProps = state => {
	const {
		uiState: { addUserBtn, newUserForm },
		users: { activeUserCard },
		usersFetchingState,
	} = state;
	return { addUserBtn, newUserForm, activeUserCard, usersFetchingState };
};

const actionCreators = {
	fetchUsersSmallDataSet: actions.fetchUsersSmallDataSet,
	fetchUsersLargeDataSet: actions.fetchUsersLargeDataSet,
	showNewUserForm: actions.showNewUserForm,
	deleteUsers: actions.deleteUsers,
};

class App extends React.Component {
	handleFetchUsers = (url, flag) => () => {
		const { fetchUsersSmallDataSet, fetchUsersLargeDataSet } = this.props;
		switch (flag) {
			case 'small':
				fetchUsersSmallDataSet(url);
				break;
			case 'large':
				fetchUsersLargeDataSet(url);
				break;
			default:
				throw new Error(`Unknown flag: '${flag}'!`);
		}
	};

	handleShowNewUserForm = () => {
		const { showNewUserForm } = this.props;
		showNewUserForm();
	};

	handleClear = () => {
		const { deleteUsers } = this.props;
		deleteUsers();
	};

	render() {
		const {
			addUserBtn,
			newUserForm,
			activeUserCard,
			usersFetchingState,
		} = this.props;
		const fetchingSmallData = usersFetchingState.smallDataSet === 'requested';
		const fetchingLargeData = usersFetchingState.largeDataSet === 'requested';

		return (
			<Fragment>
				<div className="wrapper__btn">
					<Button
						handleOnClick={this.handleFetchUsers(routes.dataSmall, 'small')}
						text="Fetch data (small)"
						raised={true}
						disabled={fetchingSmallData}
						fetching={fetchingSmallData}
					/>
					<Button
						handleOnClick={this.handleFetchUsers(routes.dataLarge, 'large')}
						text="Fetch data (large)"
						raised={true}
						disabled={fetchingLargeData}
						fetching={fetchingLargeData}
					/>
					<Button handleOnClick={this.handleClear} text="Clear" raised={true} />
					{addUserBtn === 'show' && (
						<Button
							handleOnClick={this.handleShowNewUserForm}
							text="Add user"
							raised={true}
						/>
					)}
					{usersFetchingState === 'failed' && (
						<span className="error">Please, reload page!</span>
					)}
				</div>
				{newUserForm === 'show' && <NewUserForm />}
				<FilterForm />
				<Table />
				{activeUserCard && <UserCard user={activeUserCard} />}
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, actionCreators)(App);
