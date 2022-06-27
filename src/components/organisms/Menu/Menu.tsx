import React, { useState } from 'react'
import { getAllowedClasses } from '../../../library/utils'
import bookmarkSrc from '../../../assets/img/bookmark-white.svg'
import userSrc from '../../../assets/img/user.svg'
import { Character } from '../../../library/types'
import { MenuItem } from '../..'
import MenuFavoritesList from './MenuFavoritesList'
import AddCharacterModal from './AddCharacterModal'

export type MenuProps = {
  favorites: Character[]
  onDeleteFavorite?: (character: Character) => void,
}

export default function Menu({ favorites, onDeleteFavorite, ...props }: MenuProps) {
  const classList = getAllowedClasses({
    'menu': true,
  })

  const [showModal, setShowModal] = useState(false)

  return <div className={classList}>
    <MenuItem className="menu__favorites" iconSrc={bookmarkSrc} label='FAVORITOS'>
      <MenuFavoritesList favorites={favorites} onDeleteFavorite={onDeleteFavorite}></MenuFavoritesList>
    </MenuItem>

    <MenuItem iconSrc={userSrc} label='AGREGAR' onClick={() => setShowModal(true)}></MenuItem>
    <AddCharacterModal show={showModal} onClose={() => setShowModal(false) }></AddCharacterModal>
  </div>
}