import {
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import TextReveal from "./TextReveal";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import StaggerContainer from "./StaggerContainer";

function AboutContent() {
  const values = [
    {
      title: "Quality First",
      description:
        "We focus on delivering digital experiences that combine performance, usability, and exceptional design.",
    },

    {
      title: "Business Focused",
      description:
        "Every solution is built with your business goals, audience, and long-term growth in mind.",
    },

    {
      title: "Innovation",
      description:
        "We continuously explore modern technologies and approaches to provide future-ready solutions.",
    },

    {
      title: "Partnership",
      description:
        "We believe in transparent communication and long-term relationships with our clients.",
    },
  ];

  return (
    <section className="py-5">

      <div className="content-container">

        {/* Hero */}

        <Row className="mb-5">

          <Col lg={8}>

            <p className="text-uppercase fw-semibold text-muted mb-3">
              ✦ ABOUT SITEIQUE ✦
            </p>

            <TextReveal className="fw-bold mb-4">
              Building Digital Experiences That Empower Businesses
            </TextReveal>

            <p
              className="text-muted"
              style={{ maxWidth: "750px" }}
            >
              SITEIQUE is a digital solutions agency focused on helping
              businesses establish a strong online presence through
              modern websites, business automation, and tailored web applications.
            </p>

          </Col>

        </Row>

        {/* Who We Are */}

        <Row className="g-5 align-items-center mb-5">

          <Col lg={6}>

            <h2 className="fw-bold mb-4">
              Who We Are
            </h2>

            <p className="mb-4">
              We partner with businesses to transform ideas into
              impactful digital solutions. Our approach combines
              thoughtful strategy, modern design, and robust
              development practices.
            </p>

            <p>
              Whether it's creating a professional online presence
              or streamlining internal workflows, our goal is to
              deliver solutions that drive meaningful results.
            </p>

          </Col>

          <Col lg={6}>

            <Card className="service-card border-0">

              <Card.Body className="p-5">

                <h3 className="fw-bold mb-4">
                  Mission
                </h3>

                <p className="mb-4">
                  To empower businesses with digital solutions
                  that foster growth, efficiency, and innovation.
                </p>

                <h3 className="fw-bold mb-4">
                  Vision
                </h3>

                <p>
                  To become a trusted partner for businesses
                  seeking impactful digital transformation.
                </p>

              </Card.Body>

            </Card>

          </Col>

        </Row>

        {/* Core Values */}

        <Row className="mb-5">

          <Col lg={8}>

            <p className="text-uppercase fw-semibold text-muted mb-3">
              ✦ OUR VALUES ✦
            </p>

            <h2 className="fw-bold mb-4">
              Principles That Guide Us
            </h2>

          </Col>

        </Row>
        <StaggerContainer>
          <Row className="g-4">

            {values.map((value) => (
              <Col
                key={value.title}
                md={6}
              >
                <Reveal>
                  <Card className="service-card border-0 h-100">

                    <Card.Body className="p-5">

                      <h3 className="fw-bold mb-3">
                        {value.title}
                      </h3>

                      <p>
                        {value.description}
                      </p>

                    </Card.Body>

                  </Card>
                </Reveal>
              </Col>
            ))}

          </Row>
        </StaggerContainer>
        {/* Why Choose SITEIQUE */}

        <Row className="mt-5 pt-5">

          <Col lg={8}>

            <p className="text-uppercase fw-semibold text-muted mb-3">
              ✦ WHY SITEIQUE ✦
            </p>

            <h2 className="fw-bold mb-4">
              A Partner Invested in Your Success
            </h2>

            <p>
              We believe successful projects are built on trust,
              collaboration, and a deep understanding of your goals.
              Our commitment extends beyond launch, ensuring that
              your digital solutions continue to support your growth.
            </p>

          </Col>

        </Row>

        {/* CTA */}

        <Row className="justify-content-center mt-5 pt-5">

          <Col lg={8}>

            <Card className="cta-card border-0">

              <Card.Body className="text-center py-5">

                <h2 className="fw-bold mb-3">
                  Let's Build Something Exceptional
                </h2>

                <p
                  className="text-muted mx-auto mb-4"
                  style={{ maxWidth: "600px" }}
                >
                  Ready to discuss your ideas? Let's create
                  digital experiences tailored to your business goals.
                </p>

                <Link to="/contact">

                  <Button
                    className="btn-primary-custom"
                    size="lg"
                  >
                    Get In Touch
                  </Button>

                </Link>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </div>

    </section>
  );
}

export default AboutContent;