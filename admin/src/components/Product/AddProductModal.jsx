import { useState } from "react";
import ProductForm from "./ProductForm";
import UploadImage from "./UploadImage";
import VariantTable from "./VariantTable";
import {
  uploadProductImage,
  createProduct,
} from "../../api/product.api";

export default function AddProductModal({ onClose }) {
  
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    categoryId: "",
    description: "",
  });
  const [variants, setVariants] = useState([
    {
      sku: "",
      variantName: "",
      price: "",
      stock: "",
    },
  ]);
  
async function handleSubmit() {
  try {
    let imageUrl = "";
    
    if (image) {
      const uploadResult =
        await uploadProductImage(image);

      imageUrl = uploadResult.imageUrl;
    }

    const payload = {
      ...form,
      imageUrl,
      variants,
    };

    console.log(payload);    

    const result =
      await createProduct(payload);
   
    console.log(result);

    alert("Produk berhasil dibuat!")

    onClose();

  } catch(error) {
    console.error(error);

    alert("Gagal membuat product.");
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
      "
    >
      <div
        className="
          bg-white
          rounded-xl
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          p-6
        "
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Add Product
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <ProductForm
          form={form}
          setForm={setForm}
        />

        <UploadImage
          image={image}
          setImage={setImage}
        />

        <VariantTable
          variants={variants}
          setVariants={setVariants}
        />
        

        <div className="flex justify-end gap-3 mt-8">
        
          <button
            onClick={onClose}
            className="
              border
              border-border
              rounded-lg
              px-5
              py-2
            "
          >
            Cancel
          </button>
     
          <button
            onClick={handleSubmit}
            className="
              bg-primary
              text-white
              rounded-lg
              px-5
              py-2
            "
          >
            Save Product
          </button>
   
        </div>


      </div>

    </div>
  );
}
