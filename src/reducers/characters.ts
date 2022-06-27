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
  favorites: Character[]
}

const characters = (state: CharactersState = defaultState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      if(state.characters.find(character => character.type === action.character.type)) {
        return {
          ...state,
          characters: [
            ...state.characters,
            {
              ...action.character
            }
          ]
        }
      }

      return state
      

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

      if(state.favorites.find((favorite) => action.character.name === favorite.name)){
        newFavorites = state.favorites.filter(favorite => favorite.name != action.character.name)
      }else if(newFavorites.length < 5){
        newFavorites.push(action.character)
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