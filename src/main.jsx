import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NotesProvider } from './contextAPI/NotesProvider.jsx'

createRoot(document.getElementById('root')).render(
    <NotesProvider>
      <App />
    </NotesProvider>
)
