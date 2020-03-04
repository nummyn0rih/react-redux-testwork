import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import NewUserForm from './NewUserForm';

const mapStateToProps = (state) => {
  return { state };
};

class Button extends React.Component {
  render() {
    const { handleOnClick, text, raised, outlined } = this.props;
    const btnCn = cn({
      'mdc-button': true,
      'mdc-button--raised': raised,
      'mdc-button--outlined': outlined,
    })

    return (
      <Fragment>
        <button onClick={handleOnClick} className={btnCn}>
          <div className="mdc-button__ripple"></div>
          <span className="mdc-button__label">{text}</span>
        </button>
        {text === 'Add user' && <NewUserForm />}
      </Fragment>
    );
  }
};

export default connect(mapStateToProps)(Button);
