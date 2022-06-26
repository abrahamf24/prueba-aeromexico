import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type IconProps = {
  src: string
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => {}
}

export default function Icon({ ...props }: IconProps) {
  const classList = getAllowedClasses({
    'icon': true
  })

  return <img className={classList} {...props}/>
}