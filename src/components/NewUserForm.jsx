import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Button from './Button';
import { addUser, hideNewUserForm } from '../actions';

const mapStateToProps = state => {
	const {
		usersMapping: { allIds },
		uiState: { newUserForm },
	} = state;
	const fields = ['id', 'firstName', 'lastName', 'email', 'phone'];
	return {
		allIds,
		fields,
		newUserForm,
	};
};

const actionCreators = {
	addUser,
	hideNewUserForm,
};

const validate = values => {
	const errors = {};
	if (!values.id) {
		errors.id = 'Required';
	}
	if (!values.firstName) {
		errors.firstName = 'Required';
	}
	if (!values.lastName) {
		errors.lastName = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	}
	if (!values.phone) {
		errors.phone = 'Required';
	}
	return errors;
};

class NewUserForm extends React.Component {
	submit = values => {
		const { allIds, addUser, reset } = this.props;
		const user = { ...values, id: Number.parseInt(values.id, 10) };

		if (allIds.includes(user.id)) {
			throw new SubmissionError({ _error: '*ID already exists' });
		} else {
			addUser({ user });
		}
		reset();
	};

	handleHideNewUserForm = () => {
		const { hideNewUserForm } = this.props;
		hideNewUserForm();
	};

	fieldType = fieldName => {
		switch (fieldName) {
			case 'id':
				return 'number';
			case 'email':
				return 'email';
			case 'phone':
				return 'phine';
			default:
				return 'text';
		}
	};

	renderFields = () => {
		const { fields } = this.props;
		return fields.map(fieldName => (
			<div className="mdc-text-field__wrapper" key={fieldName}>
				<label className="mdc-floating-label" htmlFor={fieldName}>
					{fieldName}
				</label>
				<div className="mdc-text-field mdc-text-field--outlined">
					<Field
						className="mdc-text-field__input"
						name={fieldName}
						id={fieldName}
						component="input"
						type={this.fieldType(fieldName)}
						required
					/>
					<div className="mdc-notched-outline">
						<div className="mdc-notched-outline__leading"></div>
						<div className="mdc-notched-outline__notch"></div>
						<div className="mdc-notched-outline__trailing"></div>
					</div>
				</div>
			</div>
		));
	};

	render() {
		const {
			newUserForm,
			handleSubmit,
			error,
			submitting,
			pristine,
			invalid,
		} = this.props;

		if (newUserForm === 'hide') {
			return null;
		}

		return (
			<form onSubmit={handleSubmit(this.submit)} className="mdc-form-field">
				{this.renderFields()}
				<div className="new-user-form-btn__wrapper">
					<Button
						handleOnClick={this.handleHideNewUserForm}
						text="close"
						outlined={true}
					/>
					<Button
						text="Add"
						raised={true}
						type="submit"
						disabled={submitting || pristine || invalid}
					/>
				</div>
				{error && <span className="error">{error}</span>}
			</form>
		);
	}
}

const ConnectedNewUserForm = connect(
	mapStateToProps,
	actionCreators
)(NewUserForm);
export default reduxForm({
	form: 'newUserFormValues',
	validate,
})(ConnectedNewUserForm);
