import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import App from './App'

const rootElem = document.getElementById('root')
if(rootElem){
  const root = ReactDOM.createRoot(rootElem)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
