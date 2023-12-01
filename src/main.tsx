import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MyProvider } from './Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyProvider>
)
