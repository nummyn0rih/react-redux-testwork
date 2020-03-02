import React from 'react';

class Row extends React.Component {
  render() {
    return (
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">101</td>
        <td class="mdc-data-table__cell">Sue</td>
        <td class="mdc-data-table__cell">Corson</td>
        <td class="mdc-data-table__cell">DWhalley@in.gov</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">(612)211-6296</td>
      </tr>
    );
  }
};

export default Row;
