import { Container, Nav, Navbar  } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const categorias = [
  { id: "p1", path: "/categoria/fantasia", name: "Libros-fantasia", description: "Libros de fantasia" },
  { id: "p2", path: "/categoria/historia", name: "Libros-Historia", description: "Libros de historia" }
];

function NavBar() {
  const { cartList } = useContext(CartContext);

  return (
    <div className="d-flex flex-direction-column justify-content-center align-items-center">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/">LibreriaOnline</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categorias.map((cat) => (
              <NavLink
                key={cat.id}
                className={(isActive) =>
                  isActive ? "btn btn-primary" : "btn btn-outline-primary"
                }
                to={cat.path}
              >
                {cat.name}
              </NavLink>
            ))}
          </Nav>
          <Nav>
            <Link to="/cart">
              <CartWidget cartItems={cartList.length} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;