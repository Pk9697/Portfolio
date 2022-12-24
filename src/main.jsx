import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import PortfolioItem from './components/PortfolioItem'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/portfolio' element={<PortfolioItem/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
