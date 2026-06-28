import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <Container>

        <Row className="gy-5">

          {/* Company */}
          <Col lg={4} md={12}>
            <h2 className="logo">QUARZON</h2>

            <p>
              Premium Quartz, Granite, Marble and Natural Stone
              supplier delivering quality products across India.
            </p>

            <div className="social">

              <a href="#"><FaFacebookF /></a>

              <a href="#"><FaInstagram /></a>

              <a href="#"><FaLinkedinIn /></a>

              <a href="#"><FaYoutube /></a>

            </div>

          </Col>

          {/* Company */}

          <Col lg={2} md={4} sm={6}>
            <h5>Company</h5>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </Col>

          {/* Products */}

          <Col lg={2} md={4} sm={6}>
            <h5>Products</h5>

            <ul>

              <li><Link to="/products">Quartz</Link></li>

              <li><Link to="/products">Granite</Link></li>

              <li><Link to="/products">Marble</Link></li>

              <li><Link to="/products">Stone Slabs</Link></li>

            </ul>

          </Col>

          {/* Support */}

          <Col lg={2} md={4} sm={6}>
            <h5>Support</h5>

            <ul>

              <li><Link to="/contact">Contact</Link></li>

              <li><Link to="/faq">FAQ</Link></li>

              <li><Link to="/privacy">Privacy</Link></li>

              <li><Link to="/terms">Terms</Link></li>

            </ul>

          </Col>

          {/* Contact */}

          <Col lg={2} md={12} sm={6}>

            <h5>Contact</h5>

            <p><FaMapMarkerAlt />Pamuru</p>

            <p><FaPhoneAlt /> +91 9701555559</p>

            <p><FaEnvelope /> info@quarzon.com</p>

            <p><FaEnvelope /> quartzon@gmail.com</p>

            <p><FaClock /> Mon - Sat</p>

          </Col>

        </Row>

        <hr />

        <div className="copyright">
          © 2026 Quarzon. All Rights Reserved.
        </div>

      </Container>

    </footer>
  );
}

export default Footer;