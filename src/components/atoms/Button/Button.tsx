import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type ButtonProps = {
  className?: string
  children: JSX.Element|string
  disable?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ className, children, disable, onClick, ...props }: ButtonProps) {
  const classList = getAllowedClasses({
    'btn': true,
    'btn--disable': !!disable
  }, className)

  return <button className={classList} {...props} onClick={(e) => {
    if(!disable && onClick){
      onClick(e)
    }
  }}>{ children }</button>
}
