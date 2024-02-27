import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { scrollToTop } from 'helpers/scrollToTop';

import sprite from 'assets/sprite.svg';

export const Paginator = ({
  initialPage,
  totalCount,
  itemsPerPage,
  setPage,
  forcePage,
  page,
  countPagesOfPagination,
}) => {
  useEffect(() => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    if (totalPages < page) setPage(totalPages);
  }, [page, itemsPerPage, setPage, totalCount]);

  const handlePageChange = (e) => {
    setPage(e.selected + 1);
    scrollToTop();
  };

  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const checkInitialPage =
    isNaN(parseInt(page)) || page <= 0 || initialPage > totalPages
      ? 1
      : initialPage;

  return (
    <ReactPaginate
      containerClassName={'pagination-list'}
      pageClassName={'pagination-list-item'}
      previousClassName={'pagination-list-item mr-[20px]'}
      nextClassName={'pagination-list-item ml-[20px]'}
      activeClassName={'pagination-list-selected-item'}
      pageLinkClassName={'pagination-list-link'}
      pageRangeDisplayed={countPagesOfPagination - 4}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      initialPage={checkInitialPage - 1}
      forcePage={forcePage - 1}
      onPageChange={handlePageChange}
      previousLabel={
        <svg className="pagination-icon-arrow">
          <use href={sprite + '#icon-pagination-arrow'}></use>
        </svg>
      }
      nextLabel={
        <svg className="pagination-icon-arrow rotate-180">
          <use href={sprite + '#icon-pagination-arrow'}></use>
        </svg>
      }
      breakLabel="..."
    />
  );
};
