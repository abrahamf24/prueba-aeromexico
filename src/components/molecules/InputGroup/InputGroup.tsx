import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type InputGroupProps = {
  label: string
  className?: string
  children: any
  //onClick?: (event: React.MouseEvent<HTMLImageElement>) => void
}

export default function InputGroup({ className, label, children, ...props }: InputGroupProps) {
  const classList = getAllowedClasses({
    'input-group': true
  }, className)

  return <div className={classList}>
    <span className="input-group__label">{ label }</span>
    <div className="input-group__inputs">
      { children }
    </div>
  </div>
}