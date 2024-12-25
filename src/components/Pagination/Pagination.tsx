import React from 'react';
import { PaginationData } from '../Table';

interface PaginationProps {
  pagination: PaginationData;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const { currentPage, totalPages, pageSize, totalItems } = pagination;
  const maxPagesToShow = 5; // Maximum number of pages to show in the center

  let startPage: number = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));

  let endPage: number = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (currentPage === 1) {
    endPage = Math.min(totalPages, maxPagesToShow);
  } else if (currentPage === totalPages) {
    startPage = Math.max(1, totalPages - maxPagesToShow + 1);
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="mt-2 flex items-center justify-between bg-[#6e8bb4] p-2 text-white">
      <div>
        Record {(currentPage - 1) * pageSize + 1} -{Math.min(currentPage * pageSize, totalItems)} of {totalItems}
      </div>
      <div className="flex justify-center space-x-2">
        {currentPage > 3 && (
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="rounded px-3 py-1 hover:bg-blue-600"
          >
            &lt;
          </button>
        )}

        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`rounded px-3 py-1 ${
              currentPage === page ? 'bg-white text-[#6e8bb4]' : 'hover:bg-blue-600'
            } `}
          >
            {page}
          </button>
        ))}
        {currentPage + 2 < totalPages && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="rounded px-3 py-1 hover:bg-blue-600"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
