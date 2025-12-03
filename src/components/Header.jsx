import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">POKEMON</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entities">Entities</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}