import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" />
      <button>
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
}
