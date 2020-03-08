import React from 'react';

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className="mdc-card">
        <div className="mdc-typography--body1">Выбран пользователь <b>{`${user.firstName} ${user.lastName}`}</b></div>
        <div className="mdc-typography--body1">Описание:</div>
        <textarea className="mdc-typography--body1" defaultValue={user.description && `${user.description}`} />
        <div className="mdc-typography--body1">Адрес проживания: <b>{user.address && `${user.address.streetAddress}`}</b></div>
        <div className="mdc-typography--body1">Город: <b>{user.address && `${user.address.city}`}</b></div>
        <div className="mdc-typography--body1">Провинция/штат: <b>{user.address && `${user.address.state}`}</b></div>
        <div className="mdc-typography--body1">Индекс: <b>{user.address && `${user.address.zip}`}</b></div>
      </div>
    );
  }
};

export default UserCard;
