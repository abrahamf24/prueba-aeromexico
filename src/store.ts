import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import characters from './reducers/characters'
import filters from './reducers/filters'

const allReducers = combineReducers({
  characters,
  filters
})

export default configureStore({
  reducer: allReducers,
  devTools: true
});