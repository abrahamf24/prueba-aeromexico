import React, { useRef, useState } from 'react'
import { CharacterStatus, CharacterType, House } from "../../../library/types"
import { Modal } from '../../molecules/Modal'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { InputGroup } from '../../molecules/InputGroup'
import { addCharacter as apiAddCharacter } from '../../../api'
import { NotificationManager } from 'react-notifications';
import { addCharacter } from '../../../actions'
import { useDispatch } from 'react-redux'

export type AddCharacterModalProps = {
  show: boolean
  onClose: () => void
}

export default function AddCharacterModal({show, onClose}: AddCharacterModalProps){
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [eyeColour, setEyeColour] = useState('')
  const [hairColor, setHairColor] = useState('')
  const [gender, setGender] = useState('female')
  const [type, setType] = useState<CharacterType>(CharacterType.Estudiante)
  const [url, setUrl] = useState('')
  const [sendingForm, setSendingForm] = useState(false)

  const pictureRef = useRef(null)
  const dispatch = useDispatch()

  const formComplete = name && birthdate && eyeColour && hairColor && gender && type && url

  const resetForm = () => {
    setName('')
    setBirthdate('')
    setEyeColour('')
    setHairColor('')
    setGender('female')
    setType(CharacterType.Estudiante)
    setUrl('')

    if(pictureRef && pictureRef.current)
      pictureRef.current.value = null
  }

  const Footer = <Button disable={!formComplete || sendingForm} onClick={() => {
    if(formComplete){
      const character = {
        type,
        house: undefined,
        name,
        picture: url,
        status: CharacterStatus.Vivo,
        characteristics: {
          'Cumpleaños': birthdate,
          'Género': gender,
          'Color de ojos': eyeColour,
          'Color de pelo': hairColor
        }
      }

      setSendingForm(true)
      apiAddCharacter(character)
      .then(data => {
        resetForm()
        setSendingForm(false)
        onClose()
        dispatch(addCharacter(character))
        NotificationManager.success('Personaje guardado exitósamente', 'Éxito')
      }).catch((e) => {
        setSendingForm(false)
        NotificationManager.error('El personaje ya existe o hay error de red', 'Error')
      })
    }
  }}>GUARDAR</Button>

  return <Modal title='Agrega un personaje' footer={Footer} show={show} onClose={onClose}>
    <div className="modal-add-character">
      <div className="modal-add-character__column">
        <InputGroup label="NOMBRE">
          <Input value={name} onChange={(e) => {setName(e.currentTarget.value)}}></Input>
        </InputGroup>
      </div>
      <div className="modal-add-character__column">
        <InputGroup label="CUMPLEAÑOS">
          <Input value={birthdate} onChange={(e) => {setBirthdate(e.currentTarget.value)}}></Input>
        </InputGroup>
      </div>
      <div className="modal-add-character__column">
        <InputGroup label="COLOR DE OJOS">
          <Input value={eyeColour} onChange={(e) => {setEyeColour(e.currentTarget.value)}}></Input>
        </InputGroup>
      </div>
      <div className="modal-add-character__column">
        <InputGroup label="COLOR DE PELO">
          <Input value={hairColor} onChange={(e) => {setHairColor(e.currentTarget.value)}}></Input>
        </InputGroup>
      </div>
      <div className="modal-add-character__column">
        <InputGroup label="GÉNERO">
          <label htmlFor="modal-add-character__female">
            <input type="radio" id="modal-add-character__female" checked={gender === 'female'} onChange={() => setGender('female')}/> Mujer
          </label>&nbsp;&nbsp;&nbsp;
          <label htmlFor="modal-add-character__male">
            <input type="radio" id="modal-add-character__male" checked={gender === 'male'} onChange={() => setGender('male')}/> Hombre
          </label>
        </InputGroup>
      </div>
      <div className="modal-add-character__column">
        <InputGroup label="POSICIÓN">
          <label htmlFor="modal-add-character__student">
            <input id="modal-add-character__student" type="radio" checked={type === CharacterType.Estudiante} onChange={() => setType(CharacterType.Estudiante)}/> Estudiante
          </label>&nbsp;&nbsp;&nbsp;
          <label htmlFor="modal-add-character__staff">
            <input id="modal-add-character__staff" type="radio" checked={type === CharacterType.Staff} onChange={() => setType(CharacterType.Staff)}/> Staff
          </label>
        </InputGroup>
      </div>
      <div className="modal-add-character__column">
        <InputGroup label="FOTOGRAFÁ">
          <input ref={pictureRef} type="file" onChange={(e) => {
            const file = e.currentTarget.files && e.currentTarget.files.length ? e.currentTarget.files[0] : null
            const url = file ? URL.createObjectURL(file) : ''
            setUrl(url)
          }}/>
        </InputGroup>
      </div>
    </div>
  </Modal>
}