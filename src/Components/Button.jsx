import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="mdc-button mdc-button--raised">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">Add contact</span>
      </button>
    );
  }
};

export default Button;
