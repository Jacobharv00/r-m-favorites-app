import React from "react";

function Card({ character, addFavorite, removeFavorite }) {
  const { name, image } = character;

  function handleClick(event) {
    if (addFavorite) {
      addFavorite(character);
    } else {
      removeFavorite(character);
    }
  }

  return (
    <li onClick={handleClick} style={{ cursor: "pointer" }}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </li>
  );
}

export default Card;
