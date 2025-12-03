import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-stars me-2"></i>
          Pokémon SPA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/entities">
                Entities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/contact">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}