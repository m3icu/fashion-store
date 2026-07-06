import { useState, useEffect } from "react";

import { useProducts } from "../../hooks/useProducts";
import { deleteProduct} from "../../api/product.api";

import ProductToolbar from "./ProductToolbar";
import ProductTable from "./ProductTable";
import ProductPagination from "./ProductPagination";

import AddProductModal from "../../components/Product/AddProductModal";
import CategoryTable from "../../components/Category/CategoryTable";
import EditProductModal from "../../components/Product/EditProductModal";
import DeleteProductModal from "../../components/Product/DeleteProductModal";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");
  const [openAddModal, setOpenAddModal] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
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
    limit: 10,
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

      <ProductTable 
        products={data?.data ?? []}
        isLoading={isLoading}
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
          loading={deleteLoading}
          onClose={() => {
            setOpenDeleteModal(false);
            setSelectedProduct(null);
          }}
          onConfirm={async () => {
            try {
              setDeleteLoading(true);
 
              await deleteProduct(selectedProduct.id);

              setOpenDeleteModal(false);
              setSelectedProduct(null);

              refetch();
    
              alert("Produk berhasil dihapus!");
 
            } catch (error) {
              console.error(error);
              alert("Gagal menghapus produk.");
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
      />
    </div>
  );
}