import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button class="mdc-button mdc-button--raised">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Add contact</span>
      </button>
    );
  }
};

export default Button;
