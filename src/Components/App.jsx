import React, { Fragment } from 'react';
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
    showNewUserForm();
  }
  
  render() {

    return (
      <Fragment>
        <div className="wrapper__fetch">
          <Button handleOnClick={this.handleFetchUsers} text="Fetch data (little)" raised={true} />
          <Button text="Fetch data (much)" raised={true} />
        </div>
        <Button handleOnClick={this.handleShowNewUserForm} text="Add user" raised={true} />
        <Table />
      </Fragment>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(App);
