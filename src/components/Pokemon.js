import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
    <div style={{backgroundImage: 
        `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png)`,
         backgroundRepeat: 'no-repeat',paddingBottom:"50px", backgroundSize: '80% 80%' 
   }} className="pokemon-card">
        <div className="pokemon-image-container">
            <img alt={pokemon.name}
             src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
            className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
                <div>Peso:{pokemon?.height}</div>
                <div>Experiência:{pokemon?.base_experience}</div>
            
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">Poder: {type.type.name}</div>
                        )
                    })}
                </div>

                <div >Itens retidos:
                    {pokemon.held_items.map((held_items, index) => {
                        return (
                            <div key={index} > {held_items?.item?.name}</div>
                        )
                    })}
                </div>
                <button className="pokemon-heart-btn" onClick={onHeartClick}>
                    {heart}
                </button>
            </div>
        </div>
    </div>)
}

export default Pokemon;