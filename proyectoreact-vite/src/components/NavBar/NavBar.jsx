import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"


const categorias = [
  {id: "p1", path: "/categoria/fantasia", name: "Libros-fantasia", description: "Libros de fantasia" },
  {id: "p2", path: "/categoria/historia", name: "Libros-Historia", description: "Libros de historia" }
]


function NavBar() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to='/'>LibreriaOnline</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categorias.map(cat =>  <NavLink key={cat.id} className={(isActive)=> isActive ? 'btn btn-primary': 'btn btn-outline-primary'} to={cat.path}>{cat.name}</NavLink>)}
          </Nav>
          <Nav>
           
              <Link to='/cart'> <CartWidget/> </Link>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar