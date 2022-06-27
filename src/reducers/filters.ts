import { SET_FILTERS } from "../actions"
import { Filter } from "../library/types"

const filters = (state = [Filter.Estudiantes], action) => {
  switch (action.type) {
    case SET_FILTERS:
      return [
        ...action.filters
      ]

    default:
      return state
  }
}
  
  export default filters