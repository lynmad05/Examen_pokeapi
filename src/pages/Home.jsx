import { Link } from "react-router-dom";

export default function Home() {
  return (
    <article className="py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Bienvenido a Pokémon SPA</h1>
        <p className="lead text-muted">Explora Pokémon con esta SPA usando Zustand y React Router</p>

        <div className="row g-4 mt-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body p-5">
                <i className="bi bi-collection-play-fill text-primary fs-1 mb-3"></i>
                <h5 className="card-title fw-bold">Ver Entities</h5>
                <p className="card-text text-muted">Explora la lista de todos los Entities disponibles</p>
                <Link to="/entities" className="btn btn-primary">
                  Ir a entities
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body p-5">
                <i className="bi bi-envelope-fill text-success fs-1 mb-3"></i>
                <h5 className="card-title fw-bold">Contacto</h5>
                <p className="card-text text-muted">Envíanos un mensaje si tienes alguna duda</p>
                <Link to="/contact" className="btn btn-success">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}