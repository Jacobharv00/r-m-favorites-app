import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./CharacterList";
import Favorites from "./Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) => {
    const foundFavorites = favorites.find((char) => char === character);
    if (!foundFavorites) {
      setFavorites([...favorites, character]);
    }
  };

  const removeFavorite = (character) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite !== character
    );
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then((resp) => resp.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="App">
      <Favorites favorites={favorites} removeFavorite={removeFavorite} />
      <CharacterList characters={characters} addFavorite={addFavorite} />
    </div>
  );
}

export default App;
