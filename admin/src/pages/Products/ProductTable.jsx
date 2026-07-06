export default function ProductTable({
  products = [],
  isLoading,
  onEdit,
  onDelete,
}) {

  if (isLoading) {
    return (
      <div className="bg-surface rounded-card border border-border shadow-card p-6">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-card border border-border shadow-card overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="p-4">Image</th>
            <th className="p-4">Product</th>
            <th className="p-4">Category</th>
            <th className="p-4">Variants</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>
      
        <tbody>
          {products.map((product) => {
            const firstVariant = product.variants?.[0];

            const totalStock =
              product.variants?.reduce(
                (sum, variant) => sum + Number(variant.stock),
                0
              ) ?? 0;

            return (
              <tr
                key={product.id}
                className="border-b border-border hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={
                      product.imageUrl ||
                      "https://placehold.co/60x60?text=No+Image"
                    }
                    alt={product.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </td>

                <td className="p-4 font-medium">
                  {product.name}
                </td>
  
                <td className="p-4">
                  {product.category?.name ?? "-"}
                </td>

                <td className="p-4">
                  {product.variants?.length ?? 0}
                </td>

                <td className="p-4">
                  {firstVariant
                    ? `Rp ${Number(firstVariant.price).toLocaleString("id-ID")}`
                    : "-"}
                </td>

                <td className="p-4">
                  {totalStock}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(product)}
                      className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                      Edit
                    </button>
               
                    <button
                      onClick={() => onDelete(product)}
                      className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>  
              </tr>
            );                     
          })}
        </tbody>
      </table>
    </div>
  );
}