import React from "react";
import "./SearchBar.css";
import { Link as Anchor } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div class="search-bar">
      <input type="text" />

      <button>
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
}
