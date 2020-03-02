import React from 'react';
import Row from './Row'

class Table extends React.Component {
  render() {
    return (
      <div className="mdc-data-table">
        <table className="mdc-data-table__table" aria-label="Data table">
          <thead>
            <tr className="mdc-data-table__header-row">
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Id</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">First name</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Last name</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">E-mail</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Phone</th>
            </tr>
          </thead>
          <tbody className="mdc-data-table__content">
            <Row />
          </tbody>
        </table>
      </div>
    );
  }
};

export default Table;
