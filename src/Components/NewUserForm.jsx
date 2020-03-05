import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Button from './Button';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { users: { allIds }, uiState: { newUserForm } } = state;
  const fields = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
  ];
  return {
    allIds,
    fields,
    newUserForm,
  };
};

const actionCreators = {
  addUser: actions.addUser,
  hideNewUserForm: actions.hideNewUserForm,
};

class NewUserForm extends React.Component {
  submit = (values) => {
    const { allIds, addUser, reset } = this.props;
    
    if (allIds.includes(values.id)) {
      throw new SubmissionError ({
        id: '',
      });
    } else {
      addUser({ user: { ...values } });
    }
    reset();
  }

  handleHideNewUserForm = () => {
    const { hideNewUserForm } = this.props;
    hideNewUserForm();
  }

  fieldType = (fieldName) => {
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
  }

  renderFields = () => {
    const { fields } = this.props;
    return fields.map((fieldName) => (
      <div className="mdc-text-field__wrapper" key={fieldName}>
        <label className="mdc-floating-label" htmlFor={fieldName}>{fieldName}</label>
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
  }

  render() {
    const { newUserForm, handleSubmit } = this.props;

    if (newUserForm === 'hide') {
      return null;
    };

    return (
      <form onSubmit={handleSubmit(this.submit)} className="mdc-form-field">
        {this.renderFields()}
        <div className="new-user-form-btn__wrapper">
          <Button handleOnClick={this.handleHideNewUserForm} text="X" />
          <Button text="Add" raised={true} />
        </div>
      </form>
    );
  }
};

const ConnectedNewUserForm = connect(mapStateToProps, actionCreators)(NewUserForm);
export default reduxForm({
  form: 'newUser',
})(ConnectedNewUserForm);
