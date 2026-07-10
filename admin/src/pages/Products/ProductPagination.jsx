import { useState, useEffect } from "react";

export default function ProductPagination({
  pagination,
  page,
  setPage,
  limit,
  setLimit,
}) {
  const [jumpPage, setJumpPage] = useState(page);

  useEffect(() => {
    setJumpPage(page);
  }, [page]);

  if (!pagination) return null;

  function handleJump() {
    const target = Number(jumpPage);
    
    if (
      isNaN(target) ||
      target < 1 ||
      target > pagination.totalPages
    ) {
      return;
    }

    setPage(target);

  }

  return (
    <div className="flex justify-between items-center mt-4">

      <p className="text-sm text-gray-500">
        Page {pagination.page} of {pagination.totalPages}
      </p>

      <div className="flex items-center gap-2">
  
        <div className="flex items-center gap-2 mr-4">

          <span className="text-sm text-gray-500">
            Show
          </span>

          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
            className="border rounded-lg px-2 py-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>

        </div>

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-2 border rounded-lg disabled:opcity-50"
        >
          Previous
        </button>

        <button
          disabled={page === pagination.totalPages}
          onClick={() => setPage(page +1)}
          className="px-3 py-2 border rounded-lg disabled:opacity-50"
        >
          Next
        </button>

        <span className="ml-4 text-sm">
          Jump to
        </span>
        
        <input
          type="number"
          min={1}
          max={pagination.totalPages}
          value={jumpPage}
          onChange={(e) => setJumpPage(e.target.value)}
          className="w-20 border rounded-lg px-2 py-2 text-center"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleJump();
            }
          }}
        />
    
        <button
          onClick={handleJump}
          className="px-4 py-2 rounded-lg bg-primary text-white"
        >
          Go
        </button>
      
      </div>

    </div>
  );
}