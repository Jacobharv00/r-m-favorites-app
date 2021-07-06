import React from 'react'
import Card from './Card'

function Favorites(props) {

  const displayFavorites = () => props.favorites.map(favorite => {
    return <Card 
              key={favorite.id} 
              character={favorite}
              clickAction={props.removeFavorite}
            />
  })

    return (
        <ul className="favorites-list">
          {displayFavorites()}
        </ul>
    )
}

export default Favorites