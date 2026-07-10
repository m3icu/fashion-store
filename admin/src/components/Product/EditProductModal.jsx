import { useEffect, useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import VariantTable from "../../components/Product/VariantTable";
import UploadImage from "../../components/Product/UploadImage";
import toast from "react-hot-toast";
import {
  updateProduct,
  updateProductImage,
} from "../../api/product.api";

export default function EditProductModal({
  product,
  onClose,
}) {

  const { data } = useCategories();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [variants, setVariants] = useState([]);
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const categories = data?.data ?? [];

useEffect(() => {
  if(!product) return; 
 
  setName(product.name || "");
  setDescription(product.description || "");
  setVariants(product.variants || []);
  setCategoryId(product.categoryId || "");
  setImage(product.imageUrl || null);
}, [product]);

  if (!product) return null;

async function handleUpdate() {

  console.log("HANDLE UPDATE");

  if (!categoryId) {
    alert("Silakan pilih category.");
    return;
  }  
   
  let imageUrl = product.imageUrl;
  
  if (image && typeof image !== "string") {
    const uploadResult = await updateProductImage(
      product.id,
      image
    );

    imageUrl = uploadResult.imageUrl;
  }  

  try {
    const payload = {
      name,
      description,
      categoryId,
      imageUrl,
      variants: variants.map((v) => ({
        id: v.id,
        sku: v.sku,
        variantName: v. variantName,
        price: Number(v.price),
        stock: Number(v.stock),
      })),
    };

    console.log("PAYLOAD", payload);
    console.log(JSON.stringify(payload, null, 2));

    const result = await updateProduct(product.id, payload);

    console.log("RESULT", result);

    toast.success("Produk berhasil diupdate!");

    onClose();

  } catch (error) {
    console.error(error);
    console.log(error.response?.data);
    toast.error("Gagal update produk");
  }
}

  return (
    <div 
      className="
        fixed 
        inset-0 
        bg-black/40 
        flex 
        items-center 
        justify-center 
        z-50
        p-6
      "
    >

      <div 
        className="
          bg-white 
          rounded-xl 
          w-full 
          max-w-3xl 
          max-h-[90vh]
          overflow-y-auto
          p-6
        "
      >
      
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Edit Product
          </h2>
         
          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>
   
        <div className="space-y-4">
          
        <div>
          <label className="block mb-1 font-medium">
            Product Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              border
              rounded-lg
              px-3
              py-2
            "
          />
        </div>
 
        <div>
          <label className="block mb-1 font-medium">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="
              w-full
              border
              rounded-lg
              px-3
              py-2
            "
          />
        </div>
   
        <div>
          <label className="block mb-1 font-medium">
            Category 
          </label>

          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="
              w-full
              border
              rounded-lg
              px-3
              py-2
            "
          >
          
            <option value="">
             -- Pilih Category --
            </option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>       
        </div>

        <UploadImage
          image={image}
          setImage={setImage}
        />

        <VariantTable
          variants={variants}
          setVariants={setVariants}
        /> 

        </div>

        <div className="mt-8 flex justify-end gap-3">

        <button
          onClick={() => {
            console.log("Cancel clicked");
            onClose();
          }}
          className="
            px-5
            py-2
            rounded-lg
            bg-gray-400
            text-white
          "
        >
          Cancel
        </button>
        
        <button
          onClick={handleUpdate} 
          className="
            px-5
            py-2
            rounded-lg
            bg-primary
            text-white
            hover:brightness-110
            transition
          "
        >
          Update Product
        </button>
   
      </div>

      </div>
    </div>

  );
}


