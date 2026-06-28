import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaMountain,
  FaIndustry,
  FaTruck,
  FaCertificate,
  FaGlobeAsia,
  FaHandshake,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaMountain />,
    title: "Silica Quartz Mining",
    description:
      "We own and operate silica quartz mines, ensuring a reliable supply of premium-quality raw silica quartz.",
  },
  {
    icon: <FaIndustry />,
    title: "Processing & Grading",
    description:
      "Our silica quartz is carefully processed, cleaned, and graded to meet customer requirements.",
  },
  {
    icon: <FaCertificate />,
    title: "Quality Assurance",
    description:
      "Every shipment undergoes strict quality checks to ensure consistent purity and performance.",
  },
  {
    icon: <FaTruck />,
    title: "Bulk Supply",
    description:
      "We supply silica quartz in bulk quantities for industrial and commercial applications across India.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Industrial Applications",
    description:
      "Our silica quartz is suitable for glass manufacturing, ceramics, foundries, construction, and other industries.",
  },
  {
    icon: <FaHandshake />,
    title: "Reliable Customer Support",
    description:
      "We build long-term relationships by providing dependable service, timely deliveries, and customer support.",
  },
];

function Services() {
  return (
    <section className="services-page">
      <Container>
        <div className="text-center mb-5">
          <h1>Our Services</h1>
          <p>
            Quarzon is a trusted supplier of high-quality silica quartz from our
            own mines, delivering reliable products for industries across India.
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;