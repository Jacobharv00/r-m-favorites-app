import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./CharacterList";
import Favorites from "./Favorites";

// prettier-ignore
function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = ( character ) => {
    const foundCharacter = favorites.find( char => char === character )
      if (!foundCharacter) { // to make sure character doesn't get added multiple times
        setFavorites( [ ...favorites, character ] )
        // postFav(character)
    }
  }

  // Example Post request
  // const postFav = ( character ) => {
  //   fetch( 'url', {
  //     method: 'POST',
  //     headers: 'application/json'
  //   })
  //   .then(resp => resp.json() )
  //   .then(setFavorites([...favorites, character]))
  // }

  const removeFavorite = ( character ) => {
    const updatedFavorites = favorites.filter(favorite => favorite !== character) // give us a brand new list of the favorites who is not the character we are not trying to delete 
    setFavorites(updatedFavorites)
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then((resp) => resp.json())
      .then((data) => setCharacters(data.results))
  }, [])

  return (
    <div className="App">
      <Favorites
        favorites={favorites}
        removeFavorite={removeFavorite}
      />
      <CharacterList
        characters={characters}
        addFavorite={addFavorite}
      />
    </div>
  )
}

export default App;
