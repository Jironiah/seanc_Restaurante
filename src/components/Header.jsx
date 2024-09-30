import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer.jsx'

function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Index</Navbar.Brand>
            <Nav className="me-auto">
              <Link className="nav-link" to="/carta">Carta</Link>
              <Link className="nav-link" to="/menu">Menu</Link>
              <Link className="nav-link" to="/reserva">Reserva</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  )
};

export default Header;
