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
    'email',
    'phone',
  ];
  return { fields };
};

const actionCreators = {
  addUser: actions.addUser,
};

class NewUserForm extends React.Component {
  submit = (values) => {
    const { addUser, reset } = this.props;
    addUser({ user: { ...values } });
    reset();
  }

  render() {
    const { handleSubmit, fields } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)} className="mdc-form-field">

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
              required
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
          <label className="" htmlFor="email">Email</label>
          <div className="mdc-text-field mdc-text-field--outlined">
            <Field
              className="mdc-text-field__input"
              name="email"
              id="email"
              component="input"
              type="email"
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
          <label className="" htmlFor="phone">Phone</label>
          <div className="mdc-text-field mdc-text-field--outlined">
            <Field
              className="mdc-text-field__input"
              name="phone"
              id="phone"
              component="input"
              type="tel"
              required
            />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch"></div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
        </div>

        <button>Add</button>
      </form>
    );
  }
};

const ConnectedNewUserForm = connect(mapStateToProps, actionCreators)(NewUserForm);
export default reduxForm({
  form: 'newUser',
})(ConnectedNewUserForm);

// {fields.map((i) => {
//   const id = uniqueId();
//   return (
//     <label className="mdc-text-field mdc-text-field--outlined" key={id}>
//       <Field
//         name={i}
//         className="mdc-text-field__input"
//         component="input"
//         type="text"
//         required
//         aria-labelledby="my-label-id"
//       />
//       <div className="mdc-notched-outline">
//         <div className="mdc-notched-outline__leading"></div>
//         <div className="mdc-notched-outline__notch">
//           <span className="mdc-floating-label" id={`my-label-${id}`}></span>
//         </div>
//         <div className="mdc-notched-outline__trailing"></div>
//       </div>
//     </label>
//   )
// })}
