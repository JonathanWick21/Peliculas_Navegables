import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import App from './App.jsx'
import '/src/assets/styles/index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
				aria-label="Saltar al contenido principal"
			>
				Saltar al contenido principal
			</a>
            <BrowserRouter>
              <App />
            </BrowserRouter>
		</>
	</StrictMode>,
)
