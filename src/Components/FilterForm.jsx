import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Button from './Button';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return state;
};

const actionCreators = {

};


class FilterForm extends React.Component {
  render() {
    return (
      <form className="form__filter">
        <div className="mdc-text-field mdc-text-field--outlined">
          <Field
            className="mdc-text-field__input"
            name="filter"
            component="input"
            type="text"
            required
          />
          <div className="mdc-notched-outline">
            <div className="mdc-notched-outline__leading"></div>
            <div className="mdc-notched-outline__trailing"></div>
          </div>
        </div>
        <Button text="Find" raised={true} />
      </form>
    );
  }
};

const ConnectedFilterForm = connect(mapStateToProps, actionCreators)(FilterForm);
export default reduxForm({
  form: 'filter',
})(ConnectedFilterForm);
