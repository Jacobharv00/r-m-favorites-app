import React from "react";

function Card({ character, addFavorite, removeFavorite }) {
  function handleClick(event) {
    if (addFavorite) {
      addFavorite(character);
    } else {
      removeFavorite(character);
    }
  }

  return (
    <li onClick={handleClick}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </li>
  );
}

export default Card;
