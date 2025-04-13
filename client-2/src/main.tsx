import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './store/ContextProvider.tsx'

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('react-root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
