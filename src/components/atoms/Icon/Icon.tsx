import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type IconProps = {
  src: string
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void
}

export default function Icon({ onClick, ...props }: IconProps) {
  const classList = getAllowedClasses({
    'icon': true
  })

  return <img className={classList} onClick={(e) => {
    if(onClick) onClick(e)
  }} {...props}/>
}