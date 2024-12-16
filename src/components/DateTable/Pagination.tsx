interface PaginationProps {
  currentPage: number;
  totalRecords: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
  onRecordsPerPageChange: (recordsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalRecords,
  recordsPerPage,
  onPageChange,
  onRecordsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const showingFrom = (currentPage - 1) * recordsPerPage + 1;
  const showingTo = Math.min(currentPage * recordsPerPage, totalRecords);

  return (
    <div className="flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        {/* First Page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="rounded border p-1 disabled:opacity-50"
        >
          ⟨⟨
        </button>

        {/* Previous Page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded border p-1 disabled:opacity-50"
        >
          ⟨
        </button>

        {/* Page Input */}
        <span className="flex items-center gap-1">
          Page
          <input
            type="number"
            value={currentPage}
            onChange={e => {
              const value = parseInt(e.target.value);
              if (value > 0 && value <= totalPages) {
                onPageChange(value);
              }
            }}
            className="w-16 rounded border px-2 py-1"
          />
          of {totalPages}
        </span>

        {/* Next Page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded border p-1 disabled:opacity-50"
        >
          ⟩
        </button>

        {/* Last Page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="rounded border p-1 disabled:opacity-50"
        >
          ⟩⟩
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span>
          Showing {showingFrom} – {showingTo} of {totalRecords}
        </span>

        <select
          value={recordsPerPage}
          onChange={e => onRecordsPerPageChange(Number(e.target.value))}
          className="rounded border px-2 py-1"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>records per page</span>
      </div>
    </div>
  );
};

export default Pagination;
