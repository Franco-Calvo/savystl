import React from "react";
import { Steps } from "../Steps/Steps.tsx";
import "./CustomDesigns.css";
import { Footer } from "../Footer/Footer.tsx";

export default function CustomDesigns() {
  return (
    <div className="customDesigns">
      <h3>
        Diseños únicos <span className="customTitle">a medida</span>
      </h3>

      <div className="stepsInfo">
        <div className="containerStep">
          <Steps />
        </div>
        <span>Paso 1</span>
        <h4>Registrarse</h4>
        <p>
          Regístrate de manera sencilla y gratuita para formar parte de nuestra
          comunidad de entusiastas de la impresión 3D.
        </p>
      </div>

      <div className="stepsInfo">
        <div className="containerStep">
          <Steps />
        </div>
        <span>Paso 2</span>
        <h4>Acceder a diseños personalizados y enviar tus ideas</h4>
        <p>
          Explora nuestra plataforma y descubre una amplia variedad de diseños
          personalizados disponibles. Si no encuentras lo que buscas,
          compártenos tus ideas y requisitos. Nuestro equipo de talentosos
          diseñadores 3D colaborará contigo para dar vida a tus proyectos.
        </p>
      </div>

      <div className="stepsInfo">
        <div className="containerStep">
          <Steps />
        </div>
        <span>Paso 3</span>
        <h4>Esperar el presupuesto del diseñador</h4>
        <p>
          Después de enviar tus solicitudes, nuestro diseñador revisará
          cuidadosamente tus especificaciones y te proporcionará un presupuesto
          detallado.
        </p>
      </div>
      <span className="footerContainer">
        <Footer />
      </span>
    </div>
  );
}
