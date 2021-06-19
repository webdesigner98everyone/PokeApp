import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  // accedemos a la info del pokemon
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };
  // cuerpo del listado de pokemones
  return (
    <div>
      <div className="header">
        <h1>Pokemones Registrados</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>Buscando pokemon...</div>
      ) : (
        <div className="pokedex-grid">
          {/* hacemos un array en map */}
          {pokemons.map((pokemon, idx) => {
            // traemos solo los nombres de los pokemones
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
