import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import NewUserForm from './NewUserForm';
import FilterForm from './FilterForm';
import Table from './Table';
import UserCard from './UserCard';
import * as actions from '../actions';
import '../App.css';

const mapStateToProps = (state) => {
  const {
    uiState: { addUserBtn, newUserForm },
    users: { activeUserCard },
  } = state;
  return { addUserBtn, newUserForm, activeUserCard };
};

const actionCreators = {
  fetchUsers: actions.fetchUsers,
  showNewUserForm: actions.showNewUserForm,
  deleteUsers: actions.deleteUsers,
};

class App extends React.Component {
  handleFetchUsers = () => {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  handleShowNewUserForm = () => {
    const { showNewUserForm } = this.props;
    showNewUserForm();
  }

  handleClear = () => {
    const { deleteUsers } = this.props;
    deleteUsers();
  }
  
  render() {
    const { addUserBtn, newUserForm, activeUserCard } = this.props;

    return (
      <Fragment>
        <div className="wrapper">
          <Button handleOnClick={this.handleFetchUsers} text="Fetch data (little)" raised={true} />
          <Button text="Fetch data (much)" raised={true} />
          <Button handleOnClick={this.handleClear} text="Clear" raised={true} />
          {addUserBtn === 'show' && <Button handleOnClick={this.handleShowNewUserForm} text="Add user" raised={true} />}
        </div>
        {newUserForm === 'show' && <NewUserForm />}
        <FilterForm />
        <Table />
        {activeUserCard && <UserCard user={activeUserCard} />}
      </Fragment>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(App);
