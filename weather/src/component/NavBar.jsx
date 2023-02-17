import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBarWeather() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='text-light' href="#home">WEATHER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-decoration-none text-light mx-3' to={"/"}>HOME</Link>
            <Link className='text-decoration-none text-light mx-3' to={"/favourites"}>FAVOURITES</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarWeather;