import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import uniqueId from 'lodash.uniqueid';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const fields = [
    'id',
    'first name',
    'last name',
    'e-mail',
    'phone',
  ];
  return { fields };
};

const actionCreators = {
  addUser: actions.addUser,
};

class NewUserForm extends React.Component {
  render() {
    const { fields } = this.props;

    return (
      <div className="mdc-form-field">
        {fields.map((i) => {
          const id = uniqueId();
          return (
            <label className="mdc-text-field mdc-text-field--outlined" key={id}>
              <Field
                className="mdc-text-field__input"
                component="input"
                type="text"
                required
                aria-labelledby="my-label-id"
              />
              <div className="mdc-notched-outline">
                <div className="mdc-notched-outline__leading"></div>
                <div className="mdc-notched-outline__notch">
                  <span className="mdc-floating-label" id={`my-label-${id}`}>{i}</span>
                </div>
                <div className="mdc-notched-outline__trailing"></div>
              </div>
            </label>
          )
        })}
      </div>
    );
  }
};

const ConnectedNewUserForm = connect(mapStateToProps, actionCreators)(NewUserForm);
export default reduxForm({
  form: 'newUser',
})(ConnectedNewUserForm);
