import { useState, useEffect } from "react";

import { useProducts } from "../../hooks/useProducts";

import ProductToolbar from "./ProductToolbar";
import ProductTable from "./ProductTable";
import ProductPagination from "./ProductPagination";
import AddProductModal from "../../components/Product/AddProductModal";
import CategoryTable from "../../components/Category/CategoryTable";

export default function ProductsPage() {

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");
  const [openAddModal, setOpenAddModal] = useState(false);
  
  useEffect(() => {
    setPage(1);
  }, [search, category]);

  console.log(search);

  const {
    data,
    isLoading,
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
      />
      
      {openAddModal && (
        <AddProductModal
          onClose={() => setOpenAddModal(false)}
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