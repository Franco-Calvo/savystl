import React from "react";
import "./Card.css";
import productImage from "../Images/product-image.png";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={productImage} alt="Producto" className="card-picture" />
      </div>

      <div className="card-body">
        <h2>Llavero Gato Colgante </h2>
        <p>
          Este no es un simple gatito, este gato contiene la sabiduría de
          antiguos ancestros egipcios, adópta uno y averígualo por ti mismo.
        </p>
      </div>

      <div className="card-button">
        <button>DESCARGAR</button>
      </div>
    </div>
  );
}