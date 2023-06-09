import React, { useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const formRef = useRef();
  const navigate = useNavigate()


  const token = localStorage.getItem("token");

  async function handleSignIn(e) {
    e.preventDefault();

    const formInputs = [];

    Object.values(formRef.current).forEach((e) => {
      formInputs.push(e.value);
    });

    const data = {
      email: formInputs[0].toLowerCase(),
      password: formInputs[1],
    };

    const url = "http://localhost:8000/auth/signin";

    try {
      const res = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.data.user.name,
          last_name: res.data.user.last_name,
          email: res.data.user.email,
          user_tag: res.data.user.user_tag,
        })
      );
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/uploadfile");
      }, 3000);
    } catch (error) {
      // toast.error(error.res.data.message);
    
    }
  }

  return (
    <div className="formRegister">
      <Toaster position="top-right" />
      <form ref={formRef} onSubmit={handleSignIn}>
        <span className="inputContainer">
          <label for="username">Nombre de usuario</label>
          <input type="text" id="username" name="username" required />
        </span>
        <span className="inputContainer ">
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </span>
        <input
          onClick={handleSignIn}
          className="buttonSubmit"
          type="submit"
          value="Iniciar sesión"
        />
      </form>
    </div>
  );
}
