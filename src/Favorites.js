import React from "react";
import Card from "./Card";

function Favorites({ favorites, removeFavorite }) {
  const displayFavorites = favorites.map((favorite) => {
    return (
      <Card
        key={favorite.id}
        character={favorite}
        removeFavorite={removeFavorite}
      />
    );
  });

  return <ul className="favorites-list">{displayFavorites}</ul>;
}

export default Favorites;
