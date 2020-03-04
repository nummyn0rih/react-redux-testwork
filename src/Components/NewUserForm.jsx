import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import uniqueId from 'lodash.uniqueid';
import Button from './Button';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { users: { allIds }, uiState: { newUserForm } } = state;
  const fields = [
    'id',
    'first name',
    'last name',
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

  render() {
    const { newUserForm, handleSubmit, fields } = this.props;

    if (newUserForm === 'hide') {
      return null;
    };

    return (
      <form onSubmit={handleSubmit(this.submit)} className="mdc-form-field">
        <Button handleOnClick={this.handleHideNewUserForm} text="Close" />

        <div className="">
          <label className="" htmlFor="id">ID</label>
          <div className="mdc-text-field mdc-text-field--outlined">
            <Field
              className="mdc-text-field__input"
              name="id"
              id="id"
              component="input"
              type="number"
              required
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>
        <div className="">
          <label className="" htmlFor="first-name">First name</label>
          <div className="mdc-text-field mdc-text-field--outlined">
            <Field
              className="mdc-text-field__input"
              name="firstName"
              id="first-name"
              component="input"
              type="text"
              
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div><div className="">
          <label className="" htmlFor="last-name">Last name</label>
          <div className="mdc-text-field mdc-text-field--outlined">
            <Field
              className="mdc-text-field__input"
              name="lastName"
              id="last-name"
              component="input"
              type="text"
              
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>
        <div className="">
          <label className="" htmlFor="email">Email</label>
          <div className="mdc-text-field mdc-text-field--outlined">
            <Field
              className="mdc-text-field__input"
              name="email"
              id="email"
              component="input"
              type="email"
              
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>
        <div className="">
          <label className="" htmlFor="phone">Phone</label>
          <div className="mdc-text-field mdc-text-field--outlined">
            <Field
              className="mdc-text-field__input"
              name="phone"
              id="phone"
              component="input"
              type="tel"
              
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>

        <Button text="Add" outlined={true} />
      </form>
    );
  }
};

const ConnectedNewUserForm = connect(mapStateToProps, actionCreators)(NewUserForm);
export default reduxForm({
  form: 'newUser',
})(ConnectedNewUserForm);
