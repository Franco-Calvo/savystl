import React from "react";

export default function Register() {
  return (
    <div className="form-register">
      <form>
        <label for="username">Nombre de usuario</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label for="avatar">Avatar</label>
        <input type="file" id="avatar" name="avatar" accept="" />

        <input type="submit" value="Registrarse" />
      </form>
    </div>
  );
}
