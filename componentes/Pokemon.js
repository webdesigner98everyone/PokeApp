import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    // la idea es que en este fracmento se muestra la info del pokemon en las columnas de manera ordenada
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          {/* id del pokemon */}
          <div>Id Pokemon: {pokemon.id}</div>
          {/* nombre del pokemon */}
          <h3>Nombre: {pokemon.name}</h3>
        </div>
        <div className="card-bottom">
          {/* tipo del pokemon */}
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
