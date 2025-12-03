import { useEffect } from "react";
import { useStore } from "../store/store";
import CardList from "../components/CardList";

const Entities = () => {
  const {
    pokemons,
    currentPage,
    totalCount,
    limit,
    isLoading,
    error,
    fetchPokemons,
  } = useStore();

  const totalPages = Math.ceil(totalCount / limit);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Lista de Pokémon</h2>

      {isLoading && <p className="text-center mb-4">Cargando...</p>}
      {error && <p className="text-center text-danger mb-4">Error: {error}</p>}

      <div className="d-flex justify-content-center">
        <CardList items={pokemons} />
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
          onClick={() => fetchPokemons(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className="btn btn-primary"
        >
          Previous
        </button>

        <span className="fw-semibold">
          Page {currentPage} / {totalPages || 1}
        </span>

        <button
          onClick={() => fetchPokemons(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Entities;