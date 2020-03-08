import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Button from './Button';
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
  changePageLimit: actions.changePageLimit,
};

class Pagination extends React.Component {
  nahdleChangePage = (page) => () => {
    const { changePage } = this.props;
    changePage({ page });
  }

  handleChangePageLimit = (value) => {
    const { changePageLimit } = this.props;
    console.log('value ->', value)
    changePageLimit({ ...value })
  }

  renderPages = () => {
    const { startBlock, midBlock, endBlock, handleSubmit } = this.props;

    const renderRange = (range) => range.map((page) => (
      <Button
        handleOnClick={this.nahdleChangePage(page)}
        text={page}
        key={page}
      />
    ));

    return (
      <div className="pagination">
        <form className="pagination__select">
          <label>Records per page</label>
          <div className="pagination__option">
            <Field onChange={handleSubmit(this.handleChangePageLimit)} name="pageLimit" component="select">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </Field>
          </div>
        </form>
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

const ConnectedPagination = connect(mapStateToProps, actionCreators)(Pagination);
export default reduxForm({
  form: 'selectingFormValues',
  initialValues: { pageLimit: "10" },
})(ConnectedPagination);
