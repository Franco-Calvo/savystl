import React from "react";
import "./Register.css";
import { useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate, Link as Anchor } from "react-router-dom";

export default function Register() {
  const formRegister = useRef();
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    const formInputs = [];

    const url = "http://localhost:8000/auth/signup";

    Object.values(formRegister.current).forEach((e) => {
      if (e.name) {
        formInputs.push(e.value);
      }
    });

    const data = {
      name: formInputs[0],
      last_name: formInputs[1],
      password: formInputs[2],
      email: formInputs[3],
    };

    try {
      const response = await axios.post(url, data);
      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="formRegister">
      <Toaster position="top-right" />
      <h3>Bienvenido a nuestra comunidad</h3>

      <div className="circleGradient bouncing-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="181"
          viewBox="0 0 256 181"
          fill="none"
        >
          <circle
            cx="127.678"
            cy="52.6784"
            r="127.36"
            transform="rotate(-0.143373 127.678 52.6784)"
            fill="url(#paint0_radial_2_64)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_64"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(190.282 -32.3436) rotate(103.529) scale(218.434)"
            >
              <stop offset="0.181218" stopColor="#2EB7B7" />
              <stop offset="0.667423" stopColor="#0C79DD" />
              <stop offset="0.992812" stopColor="#042646" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="circleGradientCopy bouncing-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
        >
          <circle
            cx="68.8654"
            cy="68.8654"
            r="68.6937"
            transform="rotate(-0.143373 68.8654 68.8654)"
            fill="url(#paint0_radial_2_61)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2_61"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(38.3349 33.2464) rotate(59.144) scale(115.955)"
            >
              <stop stopColor="#646464" />
              <stop offset="0.604593" stopColor="#292929" />
              <stop offset="0.796202" stopColor="#0F0F0F" />
              <stop offset="1" stopColor="#1B1B1B" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <form ref={formRegister}>
        <span className="inputContainer">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Nombre"
          />
        </span>

        <span className="inputContainer">
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            placeholder="Apellido"
          />
        </span>

        <span className="inputContainer">
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Contraseña"
          />
        </span>

        <span className="inputContainer">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </span>

        <input
          className="buttonSubmit"
          onClick={handleSignUp}
          type="submit"
          value="Registrarse"
        />
      </form>
      <span className="labelBottom">
        <span className="notAccount">
          ¿Ya tienes cuenta?{" "}
          <Anchor className="actionSignUp" to="/login">
            Ingresar
          </Anchor>
        </span>
        <span className="passwordRecover">Olvidé mi contraseña</span>
      </span>
    </div>
  );
}
