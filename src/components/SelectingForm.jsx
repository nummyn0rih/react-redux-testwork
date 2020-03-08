import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import * as actions from '../actions';

const actionCreators = {
	changePageLimit: actions.changePageLimit,
};

class SelectingForm extends React.Component {
	componentDidUpdate = () => {
		const { pageLimitValue, changePageLimit } = this.props;
		changePageLimit({ pageLimitValue });
	};

	render() {
		return (
			<form className="pagination__select">
				<label>Records per page</label>
				<div className="pagination__option">
					<Field name="pageLimit" component="select">
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</Field>
				</div>
			</form>
		);
	}
}

const SelectingFormValuesForm = reduxForm({
	form: 'selectingFormValues',
})(SelectingForm);
const selector = formValueSelector('selectingFormValues');

export default connect(state => {
	const pageLimitValue = selector(state, 'pageLimit');
	return { pageLimitValue };
}, actionCreators)(SelectingFormValuesForm);
