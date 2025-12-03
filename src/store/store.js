import { create } from "zustand";

export const useStore = create((set) => ({
  pokemons: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  limit: 12,
  totalCount: 0,

  fetchPokemons: async (page = 1) => {
    set({ isLoading: true, error: null });

    try {
      const offset = (page - 1) * 12;

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
      );
      const data = await res.json();

      // Obtener detalles (IMAGEN)
      const detailedPokemons = await Promise.all(
        data.results.map(async (p) => {
          const detailRes = await fetch(p.url);
          const detail = await detailRes.json();

          return {
            name: p.name,
            image: detail.sprites.other["official-artwork"].front_default,
            id: detail.id,
          };
        })
      );

      set({
        pokemons: detailedPokemons,
        currentPage: page,
        totalCount: data.count,
        isLoading: false,
      });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  nextPage: () =>
    set((state) => ({
      currentPage: state.currentPage + 1,
    })),

  prevPage: () =>
    set((state) => ({
      currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
    })),
}));