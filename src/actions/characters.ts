import { Character, House } from "../library/types"

export const ADD_CHARACTER = 'ADD_CHARACTER'
export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_FETCHING_CHARACTERS = 'SET_FETCHING_CHARACTERS'
export const TOGGLE_FAVORITE_CHARACTER = 'TOGGLE_FAVORITE_CHARACTER'

export const addCharacter = (character: Character) => {
  return {
    type: ADD_CHARACTER,
    character: character
  }
}


export const setCharacters = (
  characters: [Character?]
) => {
  return {
    type: SET_CHARACTERS,
    characters
  }
}


export const setFetchingCharacters = (
  isFetching: boolean,
  error?: string
) => {
  return {
    type: SET_FETCHING_CHARACTERS,
    isFetching,
    error
  }
}


export const toggleFavoriteCharacter = (character: Character) => {
  return {
    type: TOGGLE_FAVORITE_CHARACTER,
    character
  }
}