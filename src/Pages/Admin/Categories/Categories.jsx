import useCategory from "../../../Hooks/useCategory.tsx";
import React, { useState, useRef } from "react";
import axios from "axios";
import "./Categories.css";
import { Toaster, toast } from "sonner";

export default function Categories() {
  const { categories, loading, error } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryName, setCategoryName] = useState(""); // Estado para el valor del input
  const categoryInputRef = useRef(null);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleCreateCategory = async () => {
    try {
      const categoryName = categoryInputRef.current.value;
      const response = await axios.post(
        "http://localhost:8000/category/create",
        {
          name: categoryName,
        }
      );
      toast.success(`Categoría creada: ${response.data.name}`);
      setCategoryName(""); // Vaciar el valor del input
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      const category = categories.find((cat) => cat.name === selectedCategory);
      await axios.delete(`http://localhost:8000/category/${category._id}`);
      toast.success(`Categoría eliminada: ${category.name}`);
      setSelectedCategory("");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  // Filtrar las categorías excluyendo la categoría seleccionada
  const filteredCategories = categories.filter(
    (cat) => cat.name !== selectedCategory
  );

  return (
    <div className="adminPanel">
      <Toaster position="top-right" />

      <div className="adminCategories">

        <div className="createCategories">
        <h3>Eliminar categoría</h3>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="createCategories">
              <select
                className="categorySelect"
                value={selectedCategory}
                onChange={handleChange}
              >
                <option className="categoryOption" value="">
                  Categorías disponibles
                </option>
                {filteredCategories.map((cat) => (
                  <option
                    className="categoryOption"
                    key={cat._id}
                    value={cat.name}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
              <button className="buttonCreate" onClick={handleDeleteCategory}>
                Eliminar
              </button>
            </div>
          )}
        </div>

        <div className="createCategories">
          <h3>Crear categoría</h3>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Nombre de la categoría"
            className="inputCategory"
            ref={categoryInputRef}
            value={categoryName} // Valor del input vinculado al estado local
            onChange={(event) => setCategoryName(event.target.value)} // Actualizar el estado local cuando el valor del input cambie
          />
          <button className="buttonCreate" onClick={handleCreateCategory}>
            + Crear
          </button>
        </div>
      </div>
    </div>
  );
}
