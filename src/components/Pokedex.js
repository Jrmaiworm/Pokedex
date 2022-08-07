import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import '../App.css'

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1)
    }
  }
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokemons</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div className="load">
          <div class="c-loader"></div>
        </div>

        // <div classname="loading">Aguarde...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index} pokemon={pokemon} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
