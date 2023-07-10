import React from "react";
import "./ActionHome.css";

export default function ActionHome() {
  return (
    <div className="containerPrincipal">
      <h1 className="principalTitle">Busca, descarga e imprime</h1>
      <span className="slogan">Hacemos tu impresión más fácil</span>
      <span>
        <p className="paragraph">
          Contamos con una amplia variedad de archivos para tus impresiones.
        </p>
        <p className="paragraph">Descarga archivos GRATIS cada semana.</p>
      </span>
      <span className="containerButtons">
        <button className="gradientButton">Explorar</button>
        <button className="alternativeButton">Contratar</button>
      </span>
    </div>
  );
}
