import { useCategories } from "../../hooks/useCategories";

export default function ProductForm({
  form,
  setForm,
}) {
  const { data } = useCategories();
  
  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="space-y-5">
    
      {/* PRODUCT NAME */}
      <div>
        <label className="block mb-2 font-medium">
          Product Name
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="
            w-full
            border
            border-border
            rounded-lg
            px-4
            py-2
          "
          placeholder="Product name"
        />
      </div>

      {/* CATEGORY */}
      <div>
        <label className="block mb-2 font-medium">
          Category
        </label>

        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          className="
            w-full
            border
            border-border
            rounded-lg
            px-4
            py-2
          "
        >
          <option value="">
            Select Category
          </option>
     
          {data?.data?.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="block mb-2 font-medium">
          Description
        </label>
        
        <textarea
          rows={5}
          name="description"
          value={form.description}
          onChange={handleChange}
          className="
            w-full
            border
            border-border
            rounded-lg
            px-4
            py-2
          "
          placeholder="Product description..."
        />
      </div>

    </div>
  );
}
          