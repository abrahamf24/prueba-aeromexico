import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type ButtonProps = {
  children: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => {}
}

export default function Button({ children, ...props }: ButtonProps) {
  const classList = getAllowedClasses({
    'btn': true
  })

  return <button className={classList} {...props}>{ children }</button>
}
