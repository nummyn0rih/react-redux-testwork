import React from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import cn from 'classnames';

const mapStateToProps = (state) => {
  const { usersFetchingState } = state;
  return { usersFetchingState };
};

class Button extends React.Component {
  render() {
    const {
      handleOnClick, text, raised, outlined, disabled,
    } = this.props;

    const btnCn = cn({
      'mdc-button': true,
      'mdc-button--raised': raised,
      'mdc-button--outlined': outlined,
    });

    return (
      <button onClick={handleOnClick} className={btnCn} disabled={disabled}>
        <div className="mdc-button__ripple"></div>
        <div className="mdc-button__label">{text}</div>
        {disabled && <Spinner />}
      </button>
    );
  }
};

export default connect(mapStateToProps)(Button);
