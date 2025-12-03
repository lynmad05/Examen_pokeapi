import { useEffect } from "react";
import { useStore } from "../store/store";
import CardList from "../components/CardList";
import image from "../assets/images/pokemon.jpg";

const Home = () => {
    const { pokemons, fetchPokemons, isLoading, error } = useStore();

    useEffect(() => {
        fetchPokemons(1);
    }, []);

    return (
        <div>
            <section
                className="position-relative w-100"
                style={{
                    height: "380px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <h1 className="text-white fw-bold display-5 text-center">
                        Bienvenido al Mundo Pokémon
                    </h1>
                </div>
            </section>

            <section className="container py-5">
                <h2 className="fw-bold mb-4">Pokemons</h2>

                {isLoading && <p className="text-center mb-4">Loading...</p>}
                {error && <p className="text-center text-danger mb-4">Error: {error}</p>}

                <CardList items={pokemons.slice(0, 6)} />
            </section>
        </div>
    );
};

export default Home;