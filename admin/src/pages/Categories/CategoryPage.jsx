import axios from "axios";
import { useEffect, useState } from "react";
import AddCategoryModal from "../../components/Category/AddCategoryModal";
import CategoryTable from "../../components/Category/CategoryTable";
import {
  deleteCategory,
} from "../../api/category.api";

export default function CategoryPage() {
//==========================
//   STATE
//==========================

  const [showAddModal, setShowAddModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading,setLoading] = useState(true);
  const [editingCategory, setEditingCategory] = useState(null);

//==========================
//    FUNCTION
//==========================

  async function fetchCategories() {
  
    try {
      setLoading(true);
      
      const token = localStorage.getItem("token");
      
      const res = await axios.get(
        "http://localhost:3000/categories",
        {
          headers: {
            Authorization: `Bearer ${token}` ,
          },
        }
      );

      setCategories(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this category?")) return;
    
    try {
      await deleteCategory(id);
      await fetchCategories();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus category");
    }
  }

//=============================
//   USE EFFECT
//=============================

  useEffect(() => {
    fetchCategories();
  }, []);

//==============================
//    RETURN
//==============================

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Categories
        </h1>

        <button
          onClick={() => setShowAddModal(true)}
          className="
            bg-primary
            text-white
            px-4
            py-2
            rounded-lg
          "
        >
          + Add Category
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CategoryTable
          categories={categories}
          loading={loading}
          onEdit={(category) => {
            setEditingCategory(category);
            setShowAddModal(true);
          }}
          onDelete={handleDelete}
        />
      )}

      {showAddModal && (
        <AddCategoryModal
          category={editingCategory}
          onClose={() => {
            setShowAddModal(false);
            setEditingCategory(null);
          }}
          onSuccess={fetchCategories}
        />
      )}
    </>
  );
}