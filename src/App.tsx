import React from 'react';
import logo from './assets/img/logo.svg'
import { Button } from './components'

function App() {
  return <div className="app">
    <img className="app__logo" src={logo}/>
    <h4 className="app__filter-label">Selecciona tu filtro</h4>
    <div className="app__filters">
      <Button className="app__filter-button">ESTUDIANTES</Button>
      <Button className="app__filter-button">STAFF</Button>
    </div>
  </div>
}

export default App;
