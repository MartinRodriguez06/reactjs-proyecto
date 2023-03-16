import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFireBase } from './firebase/config'
import './index.css'


initFireBase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
