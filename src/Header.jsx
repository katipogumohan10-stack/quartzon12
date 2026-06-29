import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import "./Header.css";
import logo from "./image.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      collapseOnSelect
      className={`quarzon-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Quartzon"
            className="navbar-logo"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto nav-links">

            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>

            <Nav.Link as={Link} to="/services">
              SERVICES
            </Nav.Link>

            <Nav.Link as={Link} to="/readmore">
              READ MORE
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              CONTACT
            </Nav.Link>

          </Nav>

          <a href="tel:+919701555559" className="phone-btn">
            <FaPhoneAlt className="me-2" />
            +91 9701555559
          </a>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;