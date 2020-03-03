import React from 'react';
import { connect } from 'react-redux';
import NewUserForm from './NewUserForm';

const mapStateToProps = (state) => {
  return { state };
};

class Button extends React.Component {
  render() {
    const { handleOnClick, text } = this.props;

    return (
      <>
      <button onClick={handleOnClick} className="mdc-button mdc-button--raised">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">{text}</span>
      </button>
      {text === 'Add user' && <NewUserForm />}
      </>
    );
  }
};

export default connect(mapStateToProps)(Button);
