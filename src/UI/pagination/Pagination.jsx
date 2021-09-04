import React from 'react';

const Pagination = ({ page, changePage, totalPages }) => {
  let pagesArray = [];

  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  return (
    <div className="page__wrapper">
      {pagesArray.map(p => {
        return (
          <span
            onClick={() => changePage(p)}
            className={page === p ? 'page page--active' : 'page'}
            key={p}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
