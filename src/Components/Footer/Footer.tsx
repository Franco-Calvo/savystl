//@ts-nocheck
import React from "react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import "./Footer.css";

export const Footer = (): FooterProps => {
  return (
    <div className="footer">
      <span>SavySTL 2023 &copy; | Todos los derechos reservados. </span>
      <span className="iconsFooter">
        <FaInstagram />
        <FaDiscord />
      </span>
    </div>
  );
};
