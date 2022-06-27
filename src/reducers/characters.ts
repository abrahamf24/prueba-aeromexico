import { ADD_CHARACTER, SET_CHARACTERS, SET_FETCHING_CHARACTERS } from "../actions"

const defaultState = {
  characters: [],
  isFetching: false,
  error: null,
}

const characters = (state = defaultState, action) => {
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
    
    default:
      return state
  }
}
  
  export default characters