import React from "react";

// prettier-ignore
function Card({character, clickAction}) { //addFavorite, removeFavorite = clickAction
  const {name, image} = character

  const handleClick = ( event ) => {
    // if ( addFavorite ) {
    //   addFavorite(character)
    // } else {
    //   removeFavorite(character)
    // }
    clickAction(character)
  }
 

  return (
    <li onClick={handleClick}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </li>
  );
}

export default Card;
