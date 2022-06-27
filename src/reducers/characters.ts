import { Character } from './../library/types';
import { ADD_CHARACTER, SET_CHARACTERS, SET_FETCHING_CHARACTERS, TOGGLE_FAVORITE_CHARACTER } from "../actions"

const defaultState = {
  characters: [],
  isFetching: false,
  error: null,
  favorites: []
}

type CharactersState = {
  characters: Character[]
  isFetching: boolean
  error: string|null
  favorites: string[]
}

const characters = (state: CharactersState = defaultState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [
          ...state.characters,
          {
            name: action.name,
            gender: action.gender,
            house: action.house,
            dateOfBirth: action.dateOfBirth,
            eyeColour: action.eyeColour,
            hairColour: action.hairColour
          }
        ]
      }

    case SET_CHARACTERS:
      return {
        ...state,
        characters: [
          ...action.characters
        ]
      }

    case SET_FETCHING_CHARACTERS:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      }

    case TOGGLE_FAVORITE_CHARACTER:
      let newFavorites = [...state.favorites]

      if(state.favorites.includes(action.name)){
        newFavorites = state.favorites.filter(favorite => favorite != action.name)
      }else{
        newFavorites.push(action.name)
      }
      
      return {
        ...state,
        favorites: newFavorites
      }
    
    default:
      return state
  }
}
  
  export default characters