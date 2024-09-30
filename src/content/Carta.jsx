import Entrants from "./Entrants";
import Principals from "./Principals";
import Postres from "./Postres";
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Carta = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Link className="nav-link" to="/carta/entrants">Entrants</Link>
              <Link className="nav-link" to="/carta/principals">Principals</Link>
              <Link className="nav-link" to="/carta/postres">Postres</Link>
            </Nav>
          </Container>
        </Navbar>
        {/* <div>
          <Routes>
            <Route path="entrants" element={<Entrants />} />
            <Route path="principals" element={<Principals />} />
            <Route path="postres" element={<Postres />} />
          </Routes>
        </div> */}
        <Outlet />
      </div>
    </>
  )
}

export default Carta;