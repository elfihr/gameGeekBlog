import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContexProvider } from "./context/authContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContexProvider >
      <App />
    </AuthContexProvider>
  </StrictMode>,
)
