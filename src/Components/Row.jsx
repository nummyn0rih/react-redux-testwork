import React from 'react';

class Row extends React.Component {
  render() {
    return (
      <tr className="mdc-data-table__row">
        <td className="mdc-data-table__cell mdc-data-table__cell--numeric">101</td>
        <td className="mdc-data-table__cell">Sue</td>
        <td className="mdc-data-table__cell">Corson</td>
        <td className="mdc-data-table__cell">DWhalley@in.gov</td>
        <td className="mdc-data-table__cell mdc-data-table__cell--numeric">(612)211-6296</td>
      </tr>
    );
  }
};

export default Row;
