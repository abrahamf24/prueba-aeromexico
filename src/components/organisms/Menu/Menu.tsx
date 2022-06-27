import React from 'react'
import { getAllowedClasses } from '../../../library/utils'
import { Icon } from '../../atoms/Icon'
import bookmarkSrc from '../../../assets/img/bookmark-white.svg'
import userSrc from '../../../assets/img/user.svg'
import deleteSrc from '../../../assets/img/delete.svg'
import { Character, CharacterStatus, CharacterType, House } from '../../../library/types'
import {MenuItem} from '../..'

export type MenuProps = {
  favorites: Character[]
  onDeleteFavorite?: (character: Character) => void,
}

export default function Menu({ favorites, onDeleteFavorite, ...props }: MenuProps) {
  const classList = getAllowedClasses({
    'menu': true,
  })

  return <div className={classList}>
    <MenuItem className="menu__favorites" iconSrc={bookmarkSrc} label='FAVORITOS'>
      <div className="menu__favorites-list">
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
    </MenuItem>

    <MenuItem iconSrc={userSrc} label='AGREGAR'></MenuItem>
  </div>
}