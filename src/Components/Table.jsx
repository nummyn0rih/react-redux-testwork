import React from 'react';
import Row from './Row'

class Table extends React.Component {
  render() {
    return (
      <div class="mdc-data-table">
        <table class="mdc-data-table__table" aria-label="Data table">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Id</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">First name</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Last name</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">E-mail</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Phone</th>
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            <Row />
          </tbody>
        </table>
      </div>
    );
  }
};

export default Table;
