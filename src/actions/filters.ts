import { Filter } from "../library/types"

export const SET_FILTERS = 'SET_FILTERS'

export const setFilters = (
  filters: [Filter?]
) => {
  return {
    type: SET_FILTERS,
    filters
  }
}