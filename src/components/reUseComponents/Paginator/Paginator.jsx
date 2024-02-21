/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate';

import sprite from 'assets/sprite.svg';

import './Paginator.css';

export const Paginator = ({
  initialPage,
  totalCount,
  itemsPerPage,
  setPage,
  countPagesOfPagination,
}) => {
  return (
    <ReactPaginate
      containerClassName={'pagination-list'}
      pageRangeDisplayed={countPagesOfPagination - 4}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(totalCount / itemsPerPage)}
      initialPage={initialPage - 1}
      onPageChange={(event) => setPage(event.selected + 1)}
      previousLabel={
        <svg>
          <use href={sprite + '#icon-pagination-arrow'}></use>
        </svg>
      }
      nextLabel={
        <svg>
          <use href={sprite + '#icon-pagination-arrow'}></use>
        </svg>
      }
      breakLabel="..."
    />
  );
};
