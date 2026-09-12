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
import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/inquiries`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus(
        "Thank you! Your inquiry has been submitted successfully."
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
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
                          name="name"
                          value={formData.name}
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
                          name="email"
                          value={formData.email}
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
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Project Type</Form.Label>

                        <Form.Select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Project Type
                          </option>

                          <option value="Website Development">
                            Website Development
                          </option>

                          <option value="Landing Page">
                            Landing Page
                          </option>

                          <option value="UI/UX Design">
                            UI/UX Design
                          </option>

                          <option value="Web Application">
                            Web Application
                          </option>

                          <option value="Other">
                            Other
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Budget</Form.Label>

                        <Form.Select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Budget
                          </option>

                          <option value="Under ₹10,000">
                            Under ₹10,000
                          </option>

                          <option value="₹10,000 – ₹30,000">
                            ₹10,000 – ₹30,000
                          </option>

                          <option value="₹30,000 – ₹50,000">
                            ₹30,000 – ₹50,000
                          </option>

                          <option value="₹50,000+">
                            ₹50,000+
                          </option>
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
                        className={`mt-3 ${
                          status.includes("successfully")
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