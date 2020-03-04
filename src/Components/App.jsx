import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import NewUserForm from './NewUserForm';
import Table from './Table';
import * as actions from '../actions';
import '../App.css';

const mapStateToProps = ({ uiState: { addUserBtn, newUserForm } }) => {
  return { addUserBtn, newUserForm };
};

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
    showNewUserForm();
  }
  
  render() {
    const { addUserBtn, newUserForm } = this.props;

    return (
      <Fragment>
        <div className="wrapper__fetch">
          <Button handleOnClick={this.handleFetchUsers} text="Fetch data (little)" raised={true} />
          <Button text="Fetch data (much)" raised={true} />
        </div>
        {addUserBtn === 'show' && <Button handleOnClick={this.handleShowNewUserForm} text="Add user" raised={true} />}
        {newUserForm === 'show' && <NewUserForm />}
        <Table />
      </Fragment>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(App);
