import { Character, CharacterStatus, CharacterType } from "../library/types"

const ENDPOINT = `http://localhost:4000`

const mapApiCharacterToCharacterType = (data: {[key: string]: any}): Character => {
  return {
    type: data.hogwartsStaff ? CharacterType.Staff : CharacterType.Estudiante,
    status: data.alive ? CharacterStatus.Vivo : CharacterStatus.Muerto,
    picture: data.image,
    name: data.name,
    house: data.house,
    characteristics: {
      'Cumpleaños': data.dateOfBirth,
      'Género': data.gender,
      'Color de ojos': data.eyeColour,
      'Color de pelo': data.hairColour
    }
  }
}

const mapCharacterTypeToApiCharacter = (character: Character): {[key: string]: any} => {
  return {
    name: character.name,
    house: character.house,
    eyeColour: character.characteristics['Color de ojos'],
    hairColour: character.characteristics['Color de pelo'],
    dateOfBirth: character.characteristics['Cumpleaños'],
    gender: character.characteristics['Género'],
    image: character.picture,
    alive: character.status === CharacterStatus.Vivo,
    hogwartsStudent: character.type === CharacterType.Estudiante,
    hogwartsStaff: character.type === CharacterType.Staff,
  }
}

export const getCharacters = async (filters: {[key:string]: string}): Promise<[Character?]> => {
  const apiFilters = Object.keys(filters).map(field => `${field}=${filters[field]}`).join('&')

  const response = await fetch(`${ENDPOINT}/characters?${apiFilters}`)
  const data = await response.json()

  return data.map(mapApiCharacterToCharacterType)
}

export const addCharacter = async (character: Character) => {
  const response = await fetch(`${ENDPOINT}/characters`, {
    method: 'POST',
    body: JSON.stringify(mapCharacterTypeToApiCharacter(character)),
    headers:{
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()
  return data
}