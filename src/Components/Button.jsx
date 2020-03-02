import React from 'react';
import { connect } from 'react-redux';
import NewUserForm from './NewUserForm';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return { state };
};

const actionCreators = {
  addUser: actions.addUser,
};

class Button extends React.Component {
  handleAddUser = () => {

  }
  
  render() {
    return (
      <>
      <button onClick={this.handleAddUser} className="mdc-button mdc-button--raised">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">Add user</span>
      </button>
      <NewUserForm />
      </>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(Button);
