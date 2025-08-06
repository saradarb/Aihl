import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css' // your custom styles
import ContextProvider from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
