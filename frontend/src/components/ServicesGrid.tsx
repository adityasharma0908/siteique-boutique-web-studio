import {

  Row,
  Col,
  Card,
  Accordion,
  Button,
} from "react-bootstrap";
import Reveal from "./Reveal";
import StaggerContainer from "./StaggerContainer";

import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";
import MagneticButton from "../components/MagneticButton";

import {
  BsGlobe2,
  BsGear,
  BsPeople,
  BsArrowRight,
} from "react-icons/bs";

function ServicesGrid() {
  const services = [
    {
      icon: <BsGlobe2 size={35} />,
      title: "Web Design & Development",
      description:
        "Modern, responsive websites designed to establish a strong digital presence and create exceptional user experiences.",

      features: [
        "Business Websites",
        "Landing Pages",
        "Responsive Design",
        "Performance Optimization",
      ],
    },

    {
      icon: <BsGear size={35} />,
      title: "Business Process Automation",
      description:
        "Custom web applications that simplify operations through workflow automation, booking systems, and internal tools.",

      features: [
        "Workflow Automation",
        "Booking Systems",
        "Internal Dashboards",
        "Custom Tools",
      ],
    },

    {
      icon: <BsPeople size={35} />,
      title: "Lead & Client Management",
      description:
        "Tailored systems that help businesses organize leads, nurture client relationships, and streamline follow-ups.",

      features: [
        "CRM Solutions",
        "Lead Tracking",
        "Client Management",
        "Reporting Tools",
      ],
    },
  ];


  return (
    <section className="py-5">

      <div className="content-container py-5">

        {/* Hero */}
        <Reveal>
          <Row className="mb-5">

            <Col lg={8}>

              <p className="text-uppercase fw-semibold text-muted mb-3">
                ✦ OUR SERVICES ✦
              </p>

              <TextReveal className="fw-bold mb-4">
                Solutions Built Around Your Business Needs
              </TextReveal>

              <p
                className="text-muted"
                style={{ maxWidth: "700px" }}
              >
                We provide tailored digital solutions that strengthen
                your online presence, improve operational efficiency,
                and support sustainable business growth.
              </p>

            </Col>

          </Row>
        </Reveal>
        {/* Services */}
        <StaggerContainer>
          <Row className="g-4 mb-5">

            {services.map((service) => (
              <Col
                key={service.title}
                lg={4}
                md={6}
              >

                <Reveal>

                  <Card className="cta-card border-0 h-100">

                    <Card.Body className="p-5">

                      <div className="service-icon mb-4">
                        {service.icon}
                      </div>

                      <Card.Title className="fw-bold fs-4 mb-3">
                        {service.title}
                      </Card.Title>

                      <Card.Text className="text-muted mb-4">
                        {service.description}
                      </Card.Text>

                      <div>
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="d-flex align-items-center mb-3"
                          >

                            <BsArrowRight
                              className="me-2"
                              color="#2563EB"
                            />

                            <span>{feature}</span>

                          </div>
                        ))}
                      </div>

                    </Card.Body>

                  </Card>

                </Reveal>

              </Col>
            ))}

          </Row>
        </StaggerContainer>
        <div className="section-divider"></div>
        {/* Why Choose SITEIQUE */}
        <StaggerContainer>
          <Row className="mt-5 pt-5">

            <Col lg={12}>

              <div className="mb-5">
                <Reveal>
                  <p className="text-uppercase fw-semibold text-muted mb-3">
                    ✦ WHY CHOOSE SITEIQUE ✦
                  </p>
                </Reveal>
                <h2 className="fw-bold mb-3">
                  More Than Just Development
                </h2>

                <p
                  className="text-muted"
                  style={{ maxWidth: "700px" }}
                >
                  We focus on delivering digital solutions that create
                  measurable value for your business.
                </p>

              </div>

              <Row className="g-4">

                {[
                  {
                    title: "Tailored Solutions",
                    desc: "Every project is designed around your business goals and requirements.",
                  },

                  {
                    title: "Modern Technologies",
                    desc: "Fast, scalable and secure solutions built with modern technologies.",
                  },

                  {
                    title: "Transparent Communication",
                    desc: "Clear communication and regular updates throughout every stage.",
                  },

                  {
                    title: "Long-Term Partnership",
                    desc: "Support beyond launch to help your business continue growing.",
                  },
                ].map((item) => (
                  <Col
                    key={item.title}
                    md={6}
                  >


                    <Reveal>

                      <Card className="service-card border-0 h-100">

                        <Card.Body className="p-4">

                          <h4 className="fw-bold mb-3">
                            {item.title}
                          </h4>

                          <p className="text-muted">
                            {item.desc}
                          </p>

                        </Card.Body>

                      </Card>

                    </Reveal>

                  </Col>
                ))}

              </Row>

            </Col>

          </Row>
        </StaggerContainer>
        <div className="section-divider"></div>
        {/* FAQs */}
        <Row className="mt-5 pt-5">

          <Col lg={10}>
            <Reveal>
              <div className="mb-5">

                <p className="text-uppercase fw-semibold text-muted mb-3">
                  ✦ FREQUENTLY ASKED QUESTIONS ✦
                </p>

                <h2 className="fw-bold">
                  Common Questions
                </h2>

              </div>
            </Reveal>
            <Reveal>
              <Accordion flush>

                <Accordion.Item eventKey="0">

                  <Accordion.Header>
                    How long does a typical project take?
                  </Accordion.Header>

                  <Accordion.Body>
                    Most projects are completed within 2–8 weeks,
                    depending on their complexity and scope.
                  </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="1">

                  <Accordion.Header>
                    Do you provide support after launch?
                  </Accordion.Header>

                  <Accordion.Body>
                    Yes. We provide ongoing support and maintenance
                    to ensure everything continues running smoothly.
                  </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="2">

                  <Accordion.Header>
                    Can you redesign existing websites?
                  </Accordion.Header>

                  <Accordion.Body>
                    Absolutely. We modernize outdated websites
                    with improved design and functionality.
                  </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="3">

                  <Accordion.Header>
                    How much does a project cost?
                  </Accordion.Header>

                  <Accordion.Body>
                    Pricing depends on the project scope.
                    Contact us for a personalized quote.
                  </Accordion.Body>

                </Accordion.Item>

              </Accordion>
            </Reveal>

          </Col>

        </Row>
        <div className="section-divider"></div>
        {/* CTA */}
        <Row className="justify-content-center mt-5 pt-5">

          <Col lg={8}>
            <Reveal>
              <Card className="service-card border-0 h-100">

                <Card.Body className="text-center py-5 px-4">

                  <h2 className="fw-bold mb-3">
                    Ready to Bring Your Vision to Life?
                  </h2>

                  <p
                    className="text-muted mx-auto mb-4"
                    style={{ maxWidth: "600px" }}
                  >
                    Let's discuss how SITEIQUE can help create
                    impactful digital experiences tailored
                    to your business goals.
                  </p>

                  <Link to="/contact">

<MagneticButton>

  <Button
    className="btn-primary-custom"
    size="lg"
  >
    Start Your Project
  </Button>

</MagneticButton>

                  </Link>

                </Card.Body>

              </Card>
            </Reveal>

          </Col>

        </Row>

      </div>

    </section>
  );
}

export default ServicesGrid;