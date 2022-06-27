import React from 'react'
import { Icon } from '../../atoms/Icon'
import closeSrc from '../../../assets/img/close.svg'
import { getAllowedClasses } from '../../../library/utils'

export type ModalProps = {
  children: JSX.Element|string
  footer: JSX.Element|string
  show: boolean
  title: string
  onClose?: () => void
}

export default function Modal({children, footer, show, title, onClose}: ModalProps){
  const classList = getAllowedClasses({
    'modal': true,
    'modal--show': show,
  })

  return <div className={classList}>
    <div className="modal__window">
      <div className="modal__header">
        <h5 className="modal__title">{ title }</h5>
        <Icon src={closeSrc} onClick={() => {
          if(onClose) onClose()
        }}></Icon>
      </div>

      <div className="modal__content">
        { children }
      </div>

      <div className="modal__footer">
        { footer }
      </div>
    </div>
  </div>
}