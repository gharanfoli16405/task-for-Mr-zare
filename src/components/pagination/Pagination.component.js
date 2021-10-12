import React from "react";
import "./pagination.style.scss";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="custom-pagination">
      {pageNumbers.map((num) => (
        <li key={num}>
          <a
            href="#"
            onClick={() => setCurrentPage(num)}
            className={num === currentPage && "active"}
          >
            {num + 1}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
