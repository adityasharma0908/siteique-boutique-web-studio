import {
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import TextReveal from "./TextReveal";
import MagneticButton from "../components/MagneticButton";
import {
  BsEnvelope,
  BsClock,
  BsGeoAlt,
} from "react-icons/bs";

import emailjs from "@emailjs/browser";
import { useState } from "react";

function ContactSection() {

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    setStatus("");

    try {

await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,

    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

    formData,

    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

      setStatus(
        "Thank you! Your message has been sent successfully."
      );

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

    }
    catch (error) {

      console.error(error);

      setStatus(
        "Something went wrong. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-5">

      <div className="content-container">

        {/* Hero */}

        <Row className="mb-5">

          <Col lg={8}>

            <p className="text-uppercase fw-semibold text-muted mb-3">
              ✦ CONTACT US ✦
            </p>

            <TextReveal className="fw-bold mb-4">
              Let's Build Something Exceptional
            </TextReveal>

            <p
              className="text-muted"
              style={{ maxWidth: "700px" }}
            >
              Have a project in mind? We'd love to learn more
              about your business and discuss how SITEIQUE can help.
            </p>

          </Col>

        </Row>

        {/* Main Section */}

        <Row className="g-5">

          {/* Form */}

          <Col lg={7}>

            <Card className="service-card border-0">

              <Card.Body className="p-5">

                <h3 className="fw-bold mb-4">
                  Tell Us About Your Project
                </h3>

                <Form onSubmit={handleSubmit}>

                  <Row className="g-4">

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>

                        <Form.Control
                          type="text"
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>

                        <Form.Control
                          type="email"
                          name="from_email"
                          value={formData.from_email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Company</Form.Label>

                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Budget</Form.Label>

                        <Form.Select>

                          <option>Select Budget</option>

                          <option>Under ₹10,000</option>

                          <option>₹10,000 – ₹30,000</option>

                          <option>₹30,000 – ₹50,000</option>

                          <option>₹50,000 Above</option>

                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>
                          Project Details
                        </Form.Label>

                        <Form.Control
                          as="textarea"
                          rows={6}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          required
                        />
                      </Form.Group>
                    </Col>

                  </Row>

                  <MagneticButton>

                    <Button
                      className="btn-primary-custom"
                      size="lg"
                      type="submit"
                      disabled={loading}
                    >

                      {loading
                        ? "Sending..."
                        : "Send Inquiry"}

                    </Button>
                    {status && (

                      <p
                        className={`mt-3 ${status.includes("successfully")
                            ? "text-success"
                            : "text-danger"
                          }`}
                      >

                        {status}

                      </p>

                    )}

                  </MagneticButton>

                </Form>

              </Card.Body>

            </Card>

          </Col>

          {/* Contact Info */}

          <Col lg={5}>

            <div className="d-flex flex-column gap-4">

              <Card className="service-card border-0">

                <Card.Body className="p-4">

                  <BsEnvelope
                    size={30}
                    className="mb-3 text-primary"
                  />

                  <h4 className="fw-bold">
                    Email
                  </h4>

                  <p>
                    siteique@outlook.com
                  </p>

                </Card.Body>

              </Card>

              <Card className="service-card border-0">

                <Card.Body className="p-4">

                  <BsClock
                    size={30}
                    className="mb-3 text-primary"
                  />

                  <h4 className="fw-bold">
                    Response Time
                  </h4>

                  <p>
                    Usually within 24–48 hours.
                  </p>

                </Card.Body>

              </Card>

              <Card className="service-card border-0">

                <Card.Body className="p-4">

                  <BsGeoAlt
                    size={30}
                    className="mb-3 text-primary"
                  />

                  <h4 className="fw-bold">
                    Availability
                  </h4>

                  <p>
                    Working with clients worldwide.
                  </p>

                </Card.Body>

              </Card>

            </div>

          </Col>

        </Row>

      </div>

    </section>
  );
}

export default ContactSection;