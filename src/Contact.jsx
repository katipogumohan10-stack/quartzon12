import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Container className="py-5">
        <h1 className="text-center mb-3">Contact Us</h1>
        <p className="text-center text-muted mb-5">
          We'd love to hear from you. Feel free to contact us anytime.
        </p>

        <Row>
          {/* Contact Form */}
          <Col lg={7}>
            <Card className="shadow border-0 p-4">
              <h3 className="mb-4">Send Message</h3>

              <Form>
              <Row>
              <Col xs={12} md={6}>
              <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
              </Form.Group>
              </Col>

  <Col xs={12} md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  </Col>
</Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message..."
                  />
                </Form.Group>

                <Button variant="warning" size="lg">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Contact Details */}
          <Col lg={5}>
            <Card className="shadow border-0 p-4 mb-4">
              <h3 className="mb-4">Contact Information</h3>

              <p>
                <strong>📍 Address</strong>
                <br />
                Quarzon Pvt Ltd,
                <br />
                Pamuru, Prakasam,Andhpradesh 523108 ,
                <br />
                India
              </p>

              <p>
                <strong>📞 Phone</strong>
                <br />
                +91 9701555559
                <br />
                +91 6305612564
              </p>

              <p>
                <strong>✉ Email</strong>
                <br />
                quartzon@gmail.com.com
              </p>

              <p>
                <strong>🕒 Working Hours</strong>
                <br />
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </Card>

            <Card className="shadow border-0 overflow-hidden">
  <iframe
    title="Quarzon Location"
    src="https://maps.google.com/maps?q=Pamuru,%20Prakasam,%20Andhra%20Pradesh%20523108&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;