import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { addCharacter, setCharacters, setFetchingCharacters, setFilters } from './actions';
import { getCharacters } from './api';
import logo from './assets/img/logo.svg'
import { Button } from './components'
import CharacterHouseCard from './containers/CharacterHouseCard';
import Menu from './containers/Menu';
import { Filter, House } from './library/types';

function App() {
  const dispatch = useDispatch()
  const filteredCharacters = useSelector((state: any) => state.characters.characters)
  const isFetchingCharacters = useSelector((state: any) => state.characters.isFetching)
  const errorCharacters = useSelector((state: any) => state.characters.error)

  const filters = useSelector((state: any) => state.filters)
  const apiFilters = {
    hogwartsStaff: filters.includes(Filter.Staff) ? 'true' : 'false',
    hogwartsStudent: filters.includes(Filter.Estudiantes) ? 'true' : 'false'
  }

  const fetchCharacters = () => {
    dispatch(setFetchingCharacters(true))
    getCharacters(apiFilters)
      .then(characters => {
        dispatch(setCharacters(characters))
        dispatch(setFetchingCharacters(false))
      }).catch((e) => {
        dispatch(setFetchingCharacters(false, 'Ocurrió un error en la red, intenta nuevamente'))
      })
  }

  useEffect(() => {
    fetchCharacters()
  }, [filters])

  return <div className="app">
    <Menu favorites={filteredCharacters}></Menu>

    <img className="app__logo" src={logo}/>
    <h4 className="app__filter-label">Selecciona tu filtro</h4>
    <div className="app__filters">
      <Button className="app__filter-button" onClick={() => dispatch(setFilters([Filter.Estudiantes]))} disable={isFetchingCharacters}>
        ESTUDIANTES
      </Button>
      <Button className="app__filter-button" onClick={() => dispatch(setFilters([Filter.Staff]))} disable={isFetchingCharacters}>
        STAFF
      </Button>
    </div>

    <span className="app__status">
      {errorCharacters ? errorCharacters : ''}
      {isFetchingCharacters ? 'Obteniendo personajes' : ''}
      &nbsp;
    </span>

    <div className="app__characters-container">
      { filteredCharacters.map(character => <div className="app__character-wrapper" key={character.name}>
        <CharacterHouseCard character={character}></CharacterHouseCard>
      </div>) }
    </div>
    
  </div>
}

export default App;
