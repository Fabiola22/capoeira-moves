import React from "react";
import _ from "lodash";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNextPage,
  onPreviousPage
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="pagination-lg">
      <ul className="pagination justify-content-center">
        <li
          className={
            currentPage <= 1 ? "page-item disabled" : "page-item active"
          }
        >
          <button
            className="page-link"
            onClick={() => onPreviousPage(currentPage)}
          >
            Previous
          </button>
        </li>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={
            currentPage >= 4 ? "page-item disabled" : "page-item active"
          }
        >
          <button className="page-link" onClick={() => onNextPage(currentPage)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
