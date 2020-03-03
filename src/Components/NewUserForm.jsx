import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import uniqueId from 'lodash.uniqueid';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  // console.log('new user form -> state', state)
  const { users: { allIds }, formsUIState } = state;
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
    formsUIState,
  };
};

const actionCreators = {
  addUser: actions.addUser,
};

class NewUserForm extends React.Component {
  submit = (values) => {
    const { allIds, addUser, reset } = this.props;
    
    if (allIds.includes(values.id)) {
      throw new SubmissionError ({
        firstName: 'ID уже существует',
      });
    } else {
      addUser({ user: { ...values } });
    }
    reset();
  //   try {
  //     await addTask({ task: values });
  //   } catch (e) {
  //     throw new SubmissionError({ _error: e.message });
  //   }
  }

  render() {
    const { formsUIState, handleSubmit, fields } = this.props;

    if (formsUIState === 'none') {
      return null;
    };

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
