import React from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import Pagination from './Pagination';
import { showUserCard, sortUsers } from '../actions';

const mapStateToProps = state => {
	const {
		users: { byId },
		usersMapping: { modifiedIds, pageLimit, currentPage },
		uiState: { orderBy, activeOrder },
	} = state;
	const firstRecordToShow = currentPage * pageLimit - pageLimit;
	const recordsToShow = modifiedIds.slice(
		firstRecordToShow,
		firstRecordToShow + pageLimit
	);
	const users = recordsToShow.map(id => {
		const user = byId[id];
		return user;
	});

	return { users, byId, orderBy, activeOrder };
};

const actionCreators = {
	showUserCard,
	sortUsers,
};

class Table extends React.Component {
	handleShowUserCard = id => () => {
		const { showUserCard } = this.props;
		showUserCard({ id });
	};

	handleSort = type => () => {
		const { sortUsers, orderBy, byId } = this.props;
		const order = orderBy[type];
		sortUsers({ type, order, byId });
	};

	renderTh = () => {
		const { activeOrder, orderBy } = this.props;
		const types = Object.keys(orderBy);
		return types.map(type => (
			<th
				onClick={this.handleSort(type)}
				className="mdc-data-table__header-cell"
				key={type}
				role="columnheader"
				scope="col"
			>
				{type}
				{activeOrder === type && orderBy[type] === 'asc' && (
					<i className="material-icons">keyboard_arrow_down</i>
				)}
				{activeOrder === type && orderBy[type] === 'desc' && (
					<i className="material-icons">keyboard_arrow_up</i>
				)}
			</th>
		));
	};

	render() {
		const { users } = this.props;

		return (
			<div className="mdc-data-table">
				<table className="mdc-data-table__table" aria-label="Data table">
					<thead>
						<tr className="mdc-data-table__header-row">{this.renderTh()}</tr>
					</thead>
					<tbody className="mdc-data-table__content">
						{users.length > 0 &&
							users.map(user => (
								<Row user={user} onclick={this.handleShowUserCard} key={user.id} />
							))}
					</tbody>
				</table>
				<Pagination />
			</div>
		);
	}
}

export default connect(mapStateToProps, actionCreators)(Table);
