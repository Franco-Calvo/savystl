import React from "react";
import "./FileCard.css";
import CoverImage from "../Images/featured_preview_79fdb6d0-0fb2-4d31-8310-bc17b0a882be.jpg";

export default function FileCard() {
  return (
    <div className="fileCardContainer">
      <img src={CoverImage} alt="" className="fileCardImg" />
      <span>Florero Romano</span>
      <hr />
      <p>Este es un florero normal, ponele un cactus </p>
      <button>Detalles</button>
    </div>
  );
}
