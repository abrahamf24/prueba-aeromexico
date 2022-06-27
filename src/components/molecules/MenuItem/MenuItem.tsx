import React from 'react'
import { getAllowedClasses } from '../../../library/utils'
import { Icon } from '../../atoms/Icon'

type MenuItemProps = {
  className?: string
  children?: JSX.Element|string
  iconSrc: string
  label: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export default function MenuItem({ className, children, iconSrc, label, onClick, ...props }: MenuItemProps) {
  const classList = getAllowedClasses({
    'menu-item': true,
  }, className)

  return <div className={classList} onClick={onClick}>
    <span>{label}</span>
    <Icon src={iconSrc}></Icon>

    { children }
  </div>
}
