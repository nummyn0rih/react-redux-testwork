import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Button from './Button';
import * as actions from '../actions';

const mapStateToProps = state => {
	const {
		users: { byId },
	} = state;
	return { byId };
};

const actionCreators = {
	filterUsers: actions.filterUsers,
};

class FilterForm extends React.Component {
	handleFilterUsers = ({ filter }) => {
		const { filterUsers, byId, reset } = this.props;
		filterUsers({ filter, byId });
		reset();
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<form
				onSubmit={handleSubmit(this.handleFilterUsers)}
				className="form__filter"
			>
				<div className="mdc-text-field mdc-text-field--outlined">
					<Field
						className="mdc-text-field__input"
						name="filter"
						component="input"
						type="text"
					/>
					<div className="mdc-notched-outline">
						<div className="mdc-notched-outline__leading"></div>
						<div className="mdc-notched-outline__trailing"></div>
					</div>
				</div>
				<Button text="Find" raised={true} />
			</form>
		);
	}
}

const ConnectedFilterForm = connect(
	mapStateToProps,
	actionCreators
)(FilterForm);
export default reduxForm({
	form: 'filter',
})(ConnectedFilterForm);
