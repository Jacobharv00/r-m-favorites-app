import React from 'react'

function Card({character, clickAction}){
  // can also: const {name, image} = character and then just pass name and image

  function handleClick(e) {
    // if (addFavorite) {
    //   addFavorite(character)
    // } else {
    //   removeFavorite(character)
    // }
    clickAction(character)
  }

    return (
        <li onClick={handleClick}>
          <h2>{character.name}</h2>
          <img src={character.image} alt="character-image"/>
        </li>
    )
}


export default Card