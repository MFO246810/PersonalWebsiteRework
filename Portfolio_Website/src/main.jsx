import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
