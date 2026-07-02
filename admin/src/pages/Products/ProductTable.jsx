export default function ProductTable({
  products = [],
  isLoading,
}) {

if (products.length > 0) {
  console.log(products[0].variants[0]);
}

  if (isLoading) {
    return (
      <div className="bg-surface rounded-card border border-border shadow-card p-6">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-card border border-border shadow-card overflow-hidden">

      <table className="w-full">

        <thead>
          <tr className="border-b border-border text-left">
            <th className="p-4">Product</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
          </tr>
        </thead>
      
        <tbody>
        
          {products.map((product) => (
             
              <tr
                key={product.id}
                className="border-b border-border"
              >

                <td className="p-4">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.category?.name ?? "-"}
                </td>

             
                <td className="p-4">
                  {product.variants?.[0]
                    ? `Rp ${Number(product.variants[0].price).toLocaleString("id-ID")}`
                    : "-"}
                </td>
              </tr>
           ))}
   
        </tbody>

      </table>
    
    </div>
  );
}
