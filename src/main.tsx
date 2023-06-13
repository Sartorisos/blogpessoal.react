import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
