import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const rootElem = document.getElementById('root')
if(rootElem){
  const root = ReactDOM.createRoot(rootElem)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}
