import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import NewUserForm from './NewUserForm';
import FilterForm from './FilterForm';
import Table from './Table';
import UserCard from './UserCard';
import * as actions from '../actions';
import routes from '../routes';
import '../App.css';

const mapStateToProps = (state) => {
  const {
    uiState: { addUserBtn, newUserForm },
    users: { activeUserCard },
    usersFetchingState,  
  } = state;
  return { addUserBtn, newUserForm, activeUserCard, usersFetchingState };
};

const actionCreators = {
  fetchUsers: actions.fetchUsers,
  showNewUserForm: actions.showNewUserForm,
  deleteUsers: actions.deleteUsers,
};

class App extends React.Component {
  handleFetchUsers = (url) => () => {
    const { fetchUsers } = this.props;
    fetchUsers(url);
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
    const { addUserBtn, newUserForm, activeUserCard, usersFetchingState } = this.props;

    return (
      <Fragment>
        <div className="wrapper__btn">
          <Button handleOnClick={this.handleFetchUsers(routes.dataSmall)} text="Fetch data (small)" raised={true} />
          <Button handleOnClick={this.handleFetchUsers(routes.dataLarge)} text="Fetch data (large)" raised={true} />
          <Button handleOnClick={this.handleClear} text="Clear" raised={true} />
          {addUserBtn === 'show' && <Button handleOnClick={this.handleShowNewUserForm} text="Add user" raised={true} />}
          {usersFetchingState === 'failed' && <span className="error">Please, reload page!</span>}
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
