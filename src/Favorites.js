import React from "react";
import Card from "./Card";

// prettier-ignore
function Favorites ( {favorites, removeFavorite} ) {
  
  const displayFavorites = favorites.map(favorite => {
    return <Card key={favorite.id} character={favorite} clickAction={removeFavorite}/>
})

  return <ul className="favorites-list">{displayFavorites}</ul>;
}

export default Favorites;
