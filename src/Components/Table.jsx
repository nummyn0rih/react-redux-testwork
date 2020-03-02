import React from 'react';
import Row from './Row'

class Table extends React.Component {
  render() {
    return (
      <div class="mdc-data-table">
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
              <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
              <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
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
