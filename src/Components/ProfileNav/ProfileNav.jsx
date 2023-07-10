import React, { useState } from "react";
import "./ProfileNav.css";
import { Link as Anchor } from "react-router-dom";
import {
  HiCreditCard,
  HiQuestionMarkCircle,
  HiHand,
  HiLogout,
} from "react-icons/hi";

function Desplegable() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDesplegable = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="profile" onClick={toggleDesplegable} />
      {isOpen && (
        <div className="contentProfileContainer open">
          <span className="referenceArrow" />

          <div className="containerAnchors">
            <span className="personalInfo">
              <label> Franco@savy.com</label>
            </span>

            <hr className="hrSeparator" />

            <Anchor to="/subscription">
              <HiCreditCard />
              Subscripción
            </Anchor>
            <hr className="hrSeparator" />

            <Anchor>
              <HiQuestionMarkCircle />
              Preguntas frecuentes
            </Anchor>
            <Anchor>
              <HiHand />
              Soporte Técnico
            </Anchor>
            <hr className="hrSeparator" />
            <Anchor>
              <HiLogout />
              Cerrar Sesión
            </Anchor>
          </div>
        </div>
      )}
    </div>
  );
}
export default Desplegable;
