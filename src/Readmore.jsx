import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCheckCircle,
  FaIndustry,
  FaFlask,
  FaBuilding,
  FaCubes,
  FaPaintRoller,
  FaFilter,
} from "react-icons/fa";
import "./Readmore.css";

import quartz from "./images/q1.png";

function ReadMore() {
  return (
    <div className="readmore-page">

      <Container>

        <Row className="align-items-center py-5">

          <Col lg={6}>
            <img
              src={quartz}
              alt="Silica Quartz"
              className="img-fluid rounded shadow"
            />
          </Col>

          <Col lg={6}>

            <h1>About Silica Quartz</h1>

            <p>
              Silica Quartz is one of the most important industrial minerals.
              It contains a high percentage of silicon dioxide (SiO₂) and is
              widely used in glass manufacturing, ceramics, foundries,
              construction materials, paints, chemicals, and water filtration.
            </p>

            <p>
              Quarzon owns silica quartz mines and supplies premium-quality
              silica quartz to industries across India. Our products are
              processed carefully to maintain high purity, consistent quality,
              and reliable performance.
            </p>

            <h3>Why Choose Quarzon?</h3>

            <ul className="feature-list">

              <li><FaCheckCircle /> High Purity Silica Quartz</li>

              <li><FaCheckCircle /> Own Mining Operations</li>

              <li><FaCheckCircle /> Quality Tested Material</li>

              <li><FaCheckCircle /> Bulk Supply Across India</li>

              <li><FaCheckCircle /> Timely Delivery</li>

            </ul>

          </Col>

        </Row>

        <div className="text-center mb-5">
          <h2>Applications of Silica Quartz</h2>
        </div>

        <Row className="g-4">

          <Col lg={4} md={6}>
            <Card className="app-card">
              <Card.Body>
                <FaIndustry className="app-icon" />
                <h4>Glass Industry</h4>
                <p>
                  Used in manufacturing bottles, flat glass, fiberglass and
                  specialty glass products.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="app-card">
              <Card.Body>
                <FaFlask className="app-icon" />
                <h4>Chemical Industry</h4>
                <p>
                  Used in sodium silicate, silicon chemicals and industrial
                  manufacturing.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="app-card">
              <Card.Body>
                <FaBuilding className="app-icon" />
                <h4>Construction</h4>
                <p>
                  Used in cement, concrete, flooring, and other construction
                  materials.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="app-card">
              <Card.Body>
                <FaCubes className="app-icon" />
                <h4>Ceramics</h4>
                <p>
                  Essential raw material in ceramic tiles, sanitary ware and
                  porcelain.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="app-card">
              <Card.Body>
                <FaPaintRoller className="app-icon" />
                <h4>Paint Industry</h4>
                <p>
                  Used as an extender in paints, coatings and protective
                  finishes.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="app-card">
              <Card.Body>
                <FaFilter className="app-icon" />
                <h4>Water Filtration</h4>
                <p>
                  Used in water purification plants and filtration systems.
                </p>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default ReadMore;