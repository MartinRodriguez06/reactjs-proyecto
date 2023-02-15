import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget"
function NavBar() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to='/'>LibreriaOnline</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={(isActive)=> isActive ? 'btn btn-primary': 'btn btn-outline-primary'} to='/categoria/fantasia'>Libros-Fantasia</NavLink>
            <NavLink className={(isActive)=> isActive ? 'btn btn-primary': 'btn btn-outline-primary'} to='/categoria/historia'>Libros-Historia</NavLink>
          </Nav>
          <Nav>
           {/* <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>*/}
              <Link to='/cart'> <CartWidget/> </Link>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar