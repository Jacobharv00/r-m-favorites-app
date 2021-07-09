import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./CharacterList";
import Favorites from "./Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // find favorite character then if not found add to the favorites state
  const addFavorite = (character) => {
    const foundFavorite = favorites.find((char) => char === character);
    if (!foundFavorite) {
      setFavorites([...favorites, character]);
    }
  };

  // make a new array with only the characters we want to keep filter out the one we click on
  // prettier-ignore
  const removeFavorite = (character) => {
    const updatedFavorite = favorites.filter((favorite) => favorite !== character);
    setFavorites(updatedFavorite);
  };

  // Get request to api then put characters in state
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then((resp) => resp.json())
      .then((data) => setCharacters(data.results));
  }, []);

  // Sibling components that both use the card component
  return (
    <div className="App">
      <Favorites favorites={favorites} removeFavorite={removeFavorite} />
      <CharacterList characters={characters} addFavorite={addFavorite} />
    </div>
  );
}

export default App;

// ("https://rickandmortyapi.com/api/character/?page=2");
