import React from "react";
import "./Card.css";
import Button from "../Button/Button";

export default function Card({ title, description, image, text, onClick }) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={image} alt="Producto" className="card-picture" />
      </div>

      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="containerDownload">
          <button className="button-card" onClick={onClick}>
            {text}
          </button>
        </span>
      </div>
    </div>
  );
}
