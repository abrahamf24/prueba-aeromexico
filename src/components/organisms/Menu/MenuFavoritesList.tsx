import React from 'react'
import { Character } from "../../../library/types"
import { Icon } from '../../atoms/Icon'
import deleteSrc from '../../../assets/img/delete.svg'

export type MenuFavoritesListProps = {
  favorites: Character[]
  onDeleteFavorite?: (character: Character) => void,
}

export default ({favorites, onDeleteFavorite}: MenuFavoritesListProps) => {
  return <div className="menu__favorites-list">
    { favorites.map(favorite => <div key={favorite.name} className="menu__favorite">
      <div className="menu__favorite-wrapper">
        <img className="menu__favorite-picture" src={favorite.picture}/>
        <span className="menu__favorite-name">{favorite.name}</span>
        <Icon className="menu__favorite-delete" src={deleteSrc} onClick={() => {
          if(onDeleteFavorite) onDeleteFavorite(favorite)}
        }></Icon>
      </div>
    </div>) }
  </div>
}