export default function VariantTable({
  variants,
  setVariants,
}) {
  function addVariant() {
    setVariants([
      ...variants,
      {
        variantName: "",
        sku: "",
        price: "",
        stock: "",
      },
    ]);
  }

  function removeVariant(index) {
    if (variants.length === 1) return;

    setVariants(
      variants.filter((_, i) => i !== index)
    );
  }

  function handleChange(index, field, value) {
    const copy = [...variants];
    
    copy[index] = {
      ...copy[index],
      [field]: value,
    };   

    setVariants(copy);
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">
        Product Variants
      </h3>

      <p className="text-sm text-text-secondary mb-4">
        Add product variants, prices and stock.
      </p>

    <div className="overflow-x-auto mb-4">
      <table className="w-full border border-border rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Variant</th>  
            <th className="p-3 text-left">SKU</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead> 
 
        <tbody>
          {variants.map((variant, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-2">
                <input
                  type="text"
                  value={variant.variantName}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "variantName",
                      e.target.value
                    )
                  }
                  placeholder="Variant Name"
                  className="
                    w-full
                    border
                    border-border
                    rounded-lg
                    px-3
                    py-2
                    outline-none
                    focus:ring-2
                    focus:ring-primary
                  "
                />
              </td>  

              <td className="p-2">
                <input
                  type="text"
                  value={variant.sku}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "sku",
                      e.target.value
                    )
                  }
                  placeholder="SKU"
                  className="
                    w-full
                    border
                    border-border
                    rounded-lg
                    px-3
                    py-2
                    outline-none
                    focus:ring-2
                    focus:ring-primary
                  "
                />
              </td>

              <td className="p-2">
                <input
                  type="number"
                  value={variant.price}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "price",
                      e.target.value
                    )
                  }
                  placeholder="Price"
                  className="
                    w-full
                    border
                    border-border
                    rounded-lg
                    px-3
                    py-2
                    outline-none
                    focus:ring-2
                    focus:ring-primary
                  "
                />
              </td>

              <td className="p-2">
                <input
                  type="number"
                  value={variant.stock}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "stock",
                      e.target.value
                    )
                  }
                  placeholder="Stock"
                  className="
                    w-full
                    border
                    border-border
                    rounded-lg
                    px-3
                    py-2
                    outline-none
                    focus:ring-2
                    focus:ring-primary
                  "
                />
              </td>   

              <td className="p-2 text-center">  
                <button
                  type="button"
                  onClick={() => removeVariant(index)}
                  disabled={variants.length === 1}
                  className="
                    px-3
                    py-2
                    rounded-lg
                    bg-red-500
                    text-white
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >  
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button
      type="button"
      onClick={addVariant}
      className="
        px-4
        py-2
        bg-primary
        text-white
        rounded-lg
        hover:opacity-90
      "
    >
      + Add Variant
    </button> 

</div>
);
}                                 


 
   