import React from "react";
import Card from "../../Components/Card/Card";
import Searchbar from "../../Components/SearchBar/SearchBar";
import "./Explorer.css";

export default function Explorer() {
  return (
    <div className="container">
      <Searchbar />
      <Card />
    </div>
  );
}
