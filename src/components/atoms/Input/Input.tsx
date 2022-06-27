import React from 'react'
import { getAllowedClasses } from '../../../library/utils'

type InputProps = {
  className?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  value: string
  //onClick?: (event: React.MouseEvent<HTMLImageElement>) => void
}

export default function Input({ className, ...props }: InputProps) {
  const classList = getAllowedClasses({
    'input': true
  }, className)

  return <input className={classList} {...props}/>
}