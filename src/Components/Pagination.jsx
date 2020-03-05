import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import range from 'lodash.range';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { pagination: { totalPages } } = state;
  const pages = range(1, totalPages + 1);
  return { pages };
};

const actionCreators = {
  changePage: actions.changePage,
};

class Pagination extends React.Component {
  nahdleChangePage = (page) => () => {
    const { changePage } = this.props;
    changePage({ page });
  }

  renderPages = () => {
    const { pages } = this.props;

    return pages.map((page) => (
      <Button
        handleOnClick={this.nahdleChangePage(page)}
        text={page}
        outlined={true}
        key={page}
      />
    ));
  }

  render() {
    return (
      <div className="pagination">
        {this.renderPages()}
      </div>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(Pagination);
