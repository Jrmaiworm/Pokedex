import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import '../App.css'

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png";
  return (
    <nav>
      <div className="headerapi">
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>

      <div className="coracao"><div>{favoritePokemons.length} </div>❤️</div>
    </nav>
  );
};

export default Navbar;
