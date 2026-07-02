import { useCategories } from "../../hooks/useCategories.js";
import { Plus, Search } from "lucide-react";

export default function ProductToolbar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  onAddProduct,
}) {

const { data } = useCategories();

console.log("CATEGORY RESPONSE:", data);

  return (
    <div className="bg-surface rounded-card border border-border shadow-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">
            Products
          </h1>
  
          <p className="text-text-secondary mt-1">
            Manage all products in your store
          </p>
        </div>

        
        <button
          onClick={onAddProduct}
          className="
            flex
            items-center
            gap-2
            bg-primary
            text-white
            px-4
            py-2
            rounded-lg
            hover:opacity-90
            transition
          "
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>
      
    <div className="flex items-center gap-4 mt-5">

      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" 
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="
            w-full
            border
            border-border
            rounded-lg
            pl-10
            pr-4
            py-2
            outline-none
            focus:ring-2
            focus:ring-primary
          "
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-border rounded-lg px-4 py-2"
      >
        <option value="">All Categories</option>

        {data?.data?.map((item) => (
          <option
            key={item.id}
            value={item.slug}
          >
            {item.name}
          </option>
        ))}

      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-border rounded-lg px-4 py-2"
>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="price-asc">Price Low → High</option>
        <option value="price-desc">Price High → Low</option>
        <option value="name-asc">Name A - Z</option>
        <option value="name-desc">Name Z - A</option>
      </select>

     </div>      

    </div>
  );
}
          
        