import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type ButtonProps = {
  className?: string
  children: JSX.Element|string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => {}
}

export default function Button({ className, children, ...props }: ButtonProps) {
  const classList = getAllowedClasses({
    'btn': true
  }, className)

  return <button className={classList} {...props}>{ children }</button>
}
