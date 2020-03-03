import React from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import * as actions from '../actions';


const mapStateToProps = (state) => {
  const { users: { byId, allIds } } = state;
  const users = allIds.map((id) => byId[id]);
  return { users };
};

const actionCreators = {
  
};

class Table extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <div className="mdc-data-table">
        <table className="mdc-data-table__table" aria-label="Data table">
          <thead>
            <tr className="mdc-data-table__header-row">
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Id</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">First name</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Last name</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Email</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Phone</th>
            </tr>
          </thead>
          <tbody className="mdc-data-table__content">
            {users.length > 0 && users.map((user) => <Row user={user} key={user.id} />)}
          </tbody>
        </table>
      </div>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(Table);
