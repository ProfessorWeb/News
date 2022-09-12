import React from "react";

export const Pagination = ({ totalPosts, postPerPage, handlePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center ">
        {pageNumbers.map((item) => {
          return (
            <li key={item} className="page-item">
              <a onClick={() => handlePage(item)} className="page-link">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
