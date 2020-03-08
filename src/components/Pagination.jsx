import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Select from './SelectingForm';
import range from 'lodash.range';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { usersMapping: { totalPages, currentPage } } = state;
  const startBlock = currentPage < 3 ? range(1, 4) : [1];
  const midBlock = currentPage >= 3 && currentPage < totalPages - 1 ? (
    range(currentPage - 1, currentPage + 2)) : null;
  const endBlock = currentPage > totalPages - 2 ? range(totalPages - 2, totalPages + 1) : [totalPages];

  return {
    startBlock: totalPages < 4 ? range(1, totalPages + 1) : startBlock,
    midBlock,
    endBlock: totalPages < 4 ? null : endBlock,
  };
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
    const { startBlock, midBlock, endBlock } = this.props;
    const renderRange = (range) => range.map((page) => (
      <Button
        handleOnClick={this.nahdleChangePage(page)}
        text={page}
        key={page}
      />
    ));

    return (
      <div className="pagination">
        <Select />
        {renderRange(startBlock)}
        {midBlock && <span className="pagination__spread">. . .</span>}
        {midBlock && renderRange(midBlock)}
        {endBlock && <span className="pagination__spread">. . .</span>}
        {endBlock && renderRange(endBlock)}
      </div>
    );
  }

  render() {
    return this.renderPages();
  }
};

export default connect(mapStateToProps, actionCreators)(Pagination);
