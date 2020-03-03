import React from 'react';

class Row extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <tr className="mdc-data-table__row">
        <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{user.id}</td>
        <td className="mdc-data-table__cell">{user.firstName}</td>
        <td className="mdc-data-table__cell">{user.lastName}</td>
        <td className="mdc-data-table__cell">{user.email}</td>
        <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{user.phone}</td>
      </tr>
    );
  }
};

export default Row;
