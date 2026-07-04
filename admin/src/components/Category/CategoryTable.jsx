export default function CategoryTable({
  categories = [],
  loading = false,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No categories found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3">No</th>
            <th className="text-left px-6 py-3">Category</th>
            <th className="text-left px-6 py-3">Slug</th>
            <th className="text-left px-6 py-3">Created</th>
            <th className="text-center px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category, index) => (
            <tr
              key={category.id}
              className="border-t"
            >
              <td className="px-6 py-4">
                {index + 1}
              </td>

              <td className="px-6 py-4 font-medium">
                {category.name}
              </td>

              <td className="px-6 py-4">
                {category.slug}
              </td>

              <td className="px-6 py-4">
                {new Date(category.createdAt).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(category)}
                    className="
                      bg-blue-500
                      text-white
                      px-3
                      py-1
                      rounded
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(category.id)}
                    className="
                      bg-red-500
                      text-white
                      px-3
                      py-1
                      rounded
                    "
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


