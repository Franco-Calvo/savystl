import { useState, useEffect } from "react";
import axios from "axios";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  useEffect(() => {
    if (!categoriesLoaded) {
      setLoading(true);

      const fetchCategories = async () => {
        try {
          const response = await axios.get("http://localhost:8000/category/");
          setCategories(response.data);
          setLoading(false);
          setCategoriesLoaded(true);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchCategories();
    }
  }, [categoriesLoaded]);

  return { categories, loading, error };
};

export default useCategory;
