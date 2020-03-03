import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Table from './Table';
import * as actions from '../actions';
import '../App.css';

const mapStateToProps = (state) => state;

const actionCreators = {
  fetchUsers: actions.fetchUsers,
  showNewUserForm: actions.showNewUserForm,
};

class App extends React.Component {
  handleFetchUsers = () => {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  handleShowNewUserForm = () => {
    const { showNewUserForm } = this.props;
    showNewUserForm('show');
  }
  
  render() {

    return (
      <>
        <Button handleOnClick={this.handleFetchUsers} text="Fetch data (little)" />
        <Button text="Fetch data (much)" />
        <Button handleOnClick={this.handleShowNewUserForm} text="Add user" />
        <Table />
      </>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(App);
