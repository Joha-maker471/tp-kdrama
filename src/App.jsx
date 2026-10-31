import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <div>
      <header>
        <h1>El Rincón JR: Series Asiáticas</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/favoritos">Mis Favoritos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  )
}

export default App