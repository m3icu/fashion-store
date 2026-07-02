export default function ProductPagination({
  pagination,
  page,
  setPage,
}) {

  if (!pagination) return null;

  return (
    <div className="flex justify-between items-center">

      <p className="text-smtext-gray-500">
        Page {pagination.page} of {pagination.totalPages}
      </p>

      <div className="flex gap-2">
  
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >

          Previous
        </button>

        <button
          disabled={page === pagination.totalPages}
          onClick={() => setPage(page +1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}