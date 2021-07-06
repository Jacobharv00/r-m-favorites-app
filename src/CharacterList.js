import React from 'react'
import Card from './Card'

function CharacterList(props){

  const displayCharacters = () => props.characters.map(character => {
    return <Card 
              key={character.id} 
              character={character}  //coming from map return
              clickAction={props.addFavorite}  // coming from props.addFavorite  
            /> 
    })

    return (
        <ul className="character-list">
        {displayCharacters()}
        </ul>
    )
}

export default CharacterList