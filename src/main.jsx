import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ViewportProvider } from './context/ViewportContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </React.StrictMode>
)
