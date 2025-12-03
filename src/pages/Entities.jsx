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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Pokemon List</h2>

      {isLoading && <p className="text-center mb-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mb-4">Error: {error}</p>}
      <div className="flex justify-center">
        <CardList items={pokemons} />
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => fetchPokemons(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="flex items-center font-semibold">
          Page {currentPage} / {totalPages || 1}
        </span>

        <button
          onClick={() => fetchPokemons(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Entities;