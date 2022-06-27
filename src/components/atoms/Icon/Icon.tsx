import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type IconProps = {
  src: string
  className?: string
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void
}

export default function Icon({ onClick, className, ...props }: IconProps) {
  const classList = getAllowedClasses({
    'icon': true
  }, className)

  return <img className={classList} onClick={(e) => {
    if(onClick) onClick(e)
  }} {...props}/>
}