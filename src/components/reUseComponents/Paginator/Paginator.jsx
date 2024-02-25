import ReactPaginate from 'react-paginate';

import { scrollToTop } from 'helpers/scrollToTop';

import sprite from 'assets/sprite.svg';
import './Paginator.css';

export const Paginator = ({
  initialPage,
  totalCount,
  itemsPerPage,
  setPage,
  forcePage,
  countPagesOfPagination,
}) => {
  const handlePageChange = (e) => {
    setPage(e.selected + 1);
    scrollToTop();
  };

  return (
    <ReactPaginate
      containerClassName={'pagination-list'}
      pageRangeDisplayed={countPagesOfPagination - 4}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(totalCount / itemsPerPage)}
      initialPage={initialPage - 1}
      forcePage={forcePage - 1}
      onPageChange={handlePageChange}
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
