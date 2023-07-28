import axios from "axios";
import React from "react";
import { RiCheckFill } from "react-icons/ri";
import "./Subscriptions.css";

export default function Subscriptions() {
  const handlePayment = async (subscriptionType) => {
    const userEmail = JSON.parse(localStorage.getItem("user")).email;

    try {
      const res = await axios.post("http://localhost:8000/create-order", {
        email: userEmail,
        subscriptionType: subscriptionType,
      });
      const urlToPay = res.data.init_point;
      window.open(urlToPay, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="HomeContainer">
      <div className="containerCards">
        <div className="oneDay">
          <h4>Suscríbete por día</h4>
          <span className="checkFill">$150</span>
          <span>
            <RiCheckFill className="checkFill" /> 10 descargas
          </span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <input
            className="buttonSubmit"
            type="submit"
            value="Comprar este plan"
            onClick={() => handlePayment("day")}
          />
        </div>
        <div className="oneDay">
          <h4>Suscríbete por mes</h4>
          <span className="checkFill">$350</span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <input
            className="buttonSubmit"
            type="submit"
            value="Comprar este plan"
            onClick={() => handlePayment("month")}
          />
        </div>
        <div className="oneDay">
          <h4>Suscríbete por 6 meses</h4>
          <span className="checkFill">$350</span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <span>
            <RiCheckFill className="checkFill" /> 24hs de descargas
          </span>
          <input
            className="buttonSubmit"
            type="submit"
            value="Comprar este plan"
            onClick={() => handlePayment("year")}
          />
        </div>
      </div>
    </div>
  );
}
