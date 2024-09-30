import { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx';
import LandingPage from './components/LandingPage.jsx';
import Footer from './components/Footer.jsx';
import Carta from './content/carta.jsx';
import Entrants from "./content/Entrants";
import Principals from './content/Principals.jsx';
import Postres from './content/Postres.jsx';
import Menu from './content/Menu.jsx';
import Reserva from './content/Reserva.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/carta" element={<Carta />} >
              <Route path="entrants" element={<Entrants />} />
              <Route path="principals" element={<Principals />} />
              <Route path="postres" element={<Postres />} />
            </Route>
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserva" element={<Reserva />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default App
