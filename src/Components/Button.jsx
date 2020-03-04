import React from 'react';
import cn from 'classnames';

class Button extends React.Component {
  render() {
    const { handleOnClick, text, raised, outlined } = this.props;
    const btnCn = cn({
      'mdc-button': true,
      'mdc-button--raised': raised,
      'mdc-button--outlined': outlined,
    });

    return (
      <button onClick={handleOnClick} className={btnCn}>
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">{text}</span>
      </button>
    );
  }
};

export default Button;
