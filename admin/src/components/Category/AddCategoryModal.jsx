import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createCategory,
  updateCategory,
} from "../../api/category.api";

export default function AddCategoryModal({
  category,
  onClose,
  onSuccess,
}) {
  const [form, setForm] = useState({
    name: "",
  });

  useEffect(() => {
    if (category) {
      setForm({
        name: category.name,
      });
    }
  }, [category]);

  async function handleSubmit() {
    try {

      if (category) {

        await updateCategory(category.id, form);

        alert("Category berhasil diupdate!");

      } else {

        await createCategory(form);

        toast.success("Category berhasil dibuat!");

      }

      onSuccess();
      onClose();

    } catch (err) {
      console.error(err);
      toast.error("Gagal menyimpan category");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-[420px]">

        <h2 className="text-xl font-semibold mb-6">
          {category ? "Edit Category" : "Add Category"}
        </h2>

        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="
            w-full
            border
            rounded-lg
            px-4
            py-2
          "
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="border rounded-lg px-5 py-2"
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
            {category ? "Update" : "Save"}
          </button>

        </div>

      </div>
    </div>
  );
}