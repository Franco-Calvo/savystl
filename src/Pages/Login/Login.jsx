import React from "react";

export default function Login() {
  return (
    <div className="form-login">
      <form>
        <label for="username">Nombre de usuario</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <div>
          <span>Recuperar contraseña</span>
        </div>

        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
}
