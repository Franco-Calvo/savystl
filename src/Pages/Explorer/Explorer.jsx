import React from "react";
import Card from "../../Components/Card/Card";
import Searchbar from "../../Components/SearchBar/SearchBar";
import "./Explorer.css";
import Category from "../../Components/CategoryContainer/CategoryContainer";

export default function Explorer() {
  return (
    <div className="container-explorer">
      <Searchbar />
      <div className="category-container">
        <Category />
        <Category />
        <Category />
      </div>

      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
