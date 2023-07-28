import { Link } from "react-router-dom";
import "./AdminNav.css";
import { FaFilter, FaUpload, FaRegFile, FaUsers } from "react-icons/fa6";

export default function AdminNav() {
  return (
    <aside className="adminNav">
      <h3>Admin Panel</h3>
      <span>
        <Link to="/adminpanel/categories">
          <FaFilter />
          Categorías
        </Link>
        <Link to="/adminpanel/upload">
          <FaUpload />
          Subir Archivos
        </Link>
        <Link path="/">
          <FaRegFile />
          Archivos Semanales
        </Link>
        <Link path="/">
          <FaUsers />
          Usuarios
        </Link>
      </span>
    </aside>
  );
}
