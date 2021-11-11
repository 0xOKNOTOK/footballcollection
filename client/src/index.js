import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import { ThemeProvider } from './hooks/useDarkMode'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
