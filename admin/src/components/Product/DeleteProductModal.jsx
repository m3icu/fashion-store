export default function DeleteProductModal({
  open,
  onClose,
  onConfirm,
  product,
  loading,
  selectedProducts = [],
}) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-xl
          shadow-lg
          w-full
          max-w-md
          p-6
        "
      >
        <h2
          className="
            text-xl
            font-bold
            mb-4
          "
        >
          Delete Product
        </h2>

        <p className="text-gray-600">
          {selectedProducts.length > 0 ? (
            <>  
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {selectedProducts.length} products
              </span>
              ?
            </>
          ) : (
            <>
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {product?.name}
              </span>
              ?
            </>
          )}
        </p>

        <p className=" text-red-500 text-sm mt-2">
          This action cannot be undone.
        </p>
    
        <div
          className="
            flex
            justify-end
            gap-3
            mt-6
          "
        >
          <button
            onClick={onClose}
            className="
              px-4
              py-2
              rounded-lg
              border
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              bg-red-600
              hover:bg-red-700
              text-white
              px-4
              py-2
              rounded-lg
            "
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
