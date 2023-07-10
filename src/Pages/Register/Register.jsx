import React from "react";
import "./Register.css";
import { useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
      country: formInputs[4],
      city: formInputs[5],
    };

    console.log(data);

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
      <form ref={formRegister}>
        <span className="inputContainer">
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </span>

        <span className="inputContainer">
          <label for="lastname">Apellido</label>
          <input type="text" id="lastname" name="lastname" required />
        </span>

        <span className="inputContainer">
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </span>

        <span className="inputContainer">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </span>

        <span className="inputContainer">
          <label for="pais">País</label>
          <input type="text" id="pais" name="pais" required />
        </span>

        <span className="inputContainer">
          <label for="ciudad">Ciudad</label>
          <input type="text" id="ciudad" name="ciudad" required />
        </span>

        <input
          className="buttonSubmit"
          onClick={handleSignUp}
          type="submit"
          value="Registrarse"
        />
      </form>
    </div>
  );
}
