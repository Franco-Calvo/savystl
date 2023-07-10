import React from "react";
import { Link as Anchor } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Anchor className="STL">STL</Anchor>
      <nav>
        <Anchor to="/">INICIO</Anchor>
        <Anchor>NOSOTROS</Anchor>
        <Anchor>DISEÑOS PERSONALIZADOS</Anchor>
        <Anchor to="/login">INGRESAR</Anchor>
        {/* <Anchor to="/uploadfile">Subir Archivo</Anchor> */}
      </nav>
      {/* <ProfileNav /> */}
    </div>
  );
}
