import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import useCategory from "../../Hooks/useCategory.tsx";
import actions from "../../store/captureCards/actions";
import "./Explorer.css";

const { captureCards } = actions;

export default function Explorer() {
  const { categories } = useCategory();
  const [filterOptions, setFilterOptions] = useState({
    selectedCategory: "",
    searchTerm: "",
  });

  const text = useRef("");

  const downloadFile = (fileModelLink) => {
    const link = document.createElement("a");
    link.href = fileModelLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cards = useSelector((store) => store.cardsReducer.cards);
  const publicCards = cards.filter((card) => card.status === "public");

  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      selectedCategory: checked ? name : "",
    }));
  };

  useEffect(() => {
    dispatch(
      captureCards({
        captureCategories: filterOptions.selectedCategory,
        captureText: filterOptions.searchTerm,
      })
    );
  }, [dispatch, filterOptions]);

  return (
    <div className="container-explorer">
      <div className="search-bar">
        <input
          type="text"
          ref={text}
          placeholder="Busca un modelo aquí"
          onChange={(e) =>
            setFilterOptions((prevOptions) => ({
              ...prevOptions,
              searchTerm: e.target.value,
            }))
          }
        />

        <button>
          <FaSearch className="search-icon" />
        </button>
      </div>
      <div className="category-container">
        {categories.map((cat) => (
          <div className="category" key={cat.name}>
            <label htmlFor={cat.name}>{cat.name}</label>
            <input
              type="checkbox"
              id={cat.name}
              name={cat.name}
              checked={filterOptions.selectedCategory === cat.name}
              onChange={handleCategoryChange}
            />
          </div>
        ))}
      </div>

      <div className="cards-container">
        {publicCards.map((card) => (
          <Card
            key={card._id}
            title={card.name}
            description={card.description}
            image={card.image}
            text="Descargar"
            onClick={() => downloadFile(card.fileModel)}
          />
        ))}
      </div>
    </div>
  );
}
