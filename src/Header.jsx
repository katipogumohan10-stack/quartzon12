import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./image.png";
import Iamgeslider from "./Imageslider"
import { FaPhoneAlt } from "react-icons/fa";
import About from "./About";
import Contact from "./Contact";
import ReadMore from "./Readmore";
function Header() {
  return (
    <Navbar expand="lg" className="quarzon-navbar" sticky="top">
      <Container fluid>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center"/>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link as={Link} to="/" className="active-link">
             HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
            ABOUT
            </Nav.Link>

            <Nav.Link as={Link} to="/services">
            SERVICES
            </Nav.Link>

            <Nav.Link as={Link} to="/readmore">
             READMORE
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
            CONTACT
            </Nav.Link>
          </Nav>

          {/* Phone */}
          <a href="tel:+12345678900" className="phone-btn">
            <FaPhoneAlt className="me-2" />
            +91 9701555559
          </a>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;