import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

function NavScrollExample() {
  // const router = useNavigate();

  // const handleLoginClick =() => {
  //     router("/login")
  // }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav>
          <Link to="/" className="nav-link-navbar">
              Home
            </Link>
            <Link to="/tours" className="nav-link-navbar">
              Tours
            </Link>
            {/* <Nav.Link onClick={handleLoginClick}>Login</Nav.Link> */}
            <Link to="/login" className="nav-link-navbar">
              Login
            </Link>
            <Link to="/register" className="nav-btn">
              {" "}
              <Button variant="warning" className="rounded-pill ">
                Register
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
