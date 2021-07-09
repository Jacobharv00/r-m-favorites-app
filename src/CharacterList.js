import React from "react";
import Card from "./Card";

function CharacterList({ characters, addFavorite }) {
  const displayCharacters = characters.map((character) => {
    return (
      <Card
        key={character.id}
        character={character}
        addFavorite={addFavorite}
      />
    );
  });

  return <ul className="character-list">{displayCharacters}</ul>;
}

export default CharacterList;
