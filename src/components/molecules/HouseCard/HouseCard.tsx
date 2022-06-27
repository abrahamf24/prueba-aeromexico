import React from 'react'
import { getAllowedClasses } from '../../../library/utils'
import { Icon } from '../../atoms/Icon'
import bookmarkSrc from '../../../assets/img/bookmark.svg'
import activeBookmarkSrc from '../../../assets/img/active-bookmark.svg'
import { Character, CharacterStatus, CharacterType, House } from '../../../library/types'

export type HouseCardProps = {
  character: Character
  onToggleFavorite?: (name: string) => {},
  isFavorite: boolean
}

export default function HouseCard({ character, onToggleFavorite, isFavorite, ...props }: HouseCardProps) {
  const {picture, house, status, type, name, characteristics} = character

  const classList = getAllowedClasses({
    'house-card': true,
    'house-card--slytherin': house === House.Slytherin,
    'house-card--ravenclaw': house === House.Ravenclaw,
    'house-card--hufflepuff': house === House.Hufflepuff,
    'house-card--gryffindor': house === House.Gryffindor,
    'house-card--dead': status === CharacterStatus.Muerto,
  })

  return <div className={classList} {...props}>
    <div className="house-card__picture-container">
      <img className="house-card__picture" src={picture} alt={name}/>
    </div>

    <div className="house-card__content-container">
      <div className="house-card__header">
        <span className="house-card__note">
          <span>{ CharacterStatus[status].toUpperCase() }</span>
          <span className="house-card__note-separator"> / </span>
          <span>{ CharacterType[type].toUpperCase() }</span>
        </span>

        <Icon src={isFavorite ? activeBookmarkSrc : bookmarkSrc} onClick={(event: React.MouseEvent<HTMLImageElement>) => {
          if(onToggleFavorite) onToggleFavorite(name)
        }}></Icon>
      </div>

      <h3 className="house-card__name">{ name }</h3>
      <div className="house-card__content">
        { Object.keys(characteristics).map( (characteristic, index) => <span key={index} className="house-card__characteristic"><b>{ characteristic }:</b> {characteristics[characteristic]}</span>) }
      </div>
    </div>
  </div>
}