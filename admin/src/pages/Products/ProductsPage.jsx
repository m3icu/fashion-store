import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useProducts } from "../../hooks/useProducts";
import { deleteProduct} from "../../api/product.api";

import ProductToolbar from "./ProductToolbar";
import ProductTable from "./ProductTable";
import ProductPagination from "./ProductPagination";

import AddProductModal from "../../components/Product/AddProductModal";
import EditProductModal from "../../components/Product/EditProductModal";
import DeleteProductModal from "../../components/Product/DeleteProductModal";



export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");
  const [openAddModal, setOpenAddModal] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteLoading,  setDeleteLoading] = useState(false);
  
  useEffect(() => {
    setPage(1);
  }, [search, category]);

  const {
    data,
    isLoading,
    refetch,
  } = useProducts({
    page,
    limit,
    search,
    category,
    sort,
  });  

  return (
    <div className="space-y-6">
      <ProductToolbar 
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        onAddProduct={() => setOpenAddModal(true)}
      />

      {selectedProducts.length > 0 && (
        <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <span className="text-red-700 font-medium">
            {selectedProducts.length} produk dipilih
          </span>

          <button
            onClick={() => setOpenDeleteModal(true)}            
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            Delete Selected
          </button>
        </div>
      )} 

      <ProductTable 
        products={data?.data ?? []}
        isLoading={isLoading}

        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}

        onEdit={(product) => {
          setSelectedProduct(product);
          setOpenEditModal(true);
        }}
        onDelete={(product) => {
          setSelectedProduct(product);
          setOpenDeleteModal(true);
        }}
      />
      
      {openAddModal && (
        <AddProductModal
          onClose={() => {
            setOpenAddModal(false);
            refetch();
          }}
        />
      )}

      {openEditModal && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => {
            setOpenEditModal(false);
            setSelectedProduct(null);
            refetch();
          }}
        />
      )}      

      {openDeleteModal && (
        <DeleteProductModal
          open={openDeleteModal}
          product={selectedProduct}
          selectedProducts={selectedProducts}
          loading={deleteLoading}
          onClose={() => {
            setOpenDeleteModal(false);
            setSelectedProduct(null);
          }}

          onConfirm={async () => {
            try {
              setDeleteLoading(true);

              if (selectedProducts.length > 0) {

                await Promise.all(
                  selectedProducts.map((id) => deleteProduct(id))
                );

                setSelectedProducts([]);
 
                toast.success(
                  `${selectedProducts.length} produk berhasil dihapus!`
                );

              } else {

                await deleteProduct(selectedProduct.id);
   
                toast.success("Produk berhasil dihapus!");
              }

              setOpenDeleteModal(false);
              setSelectedProduct(null);

              await refetch();

           } catch (error) {
              console.error(error);
              toast.error("Gagal menghapus produk.");
           } finally {
             setDeleteLoading(false);
           }
         }}
       />
     )}
    
      <ProductPagination
        pagination={data?.pagination}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
      />
    </div>
  );
}