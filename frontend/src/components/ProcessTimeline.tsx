import {
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import TextReveal from "./TextReveal";
import { Link } from "react-router-dom";

function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We understand your business goals, challenges, audience, and project requirements.",
    },

    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "A roadmap is created outlining timelines, deliverables, and project milestones.",
    },

    {
      number: "03",
      title: "Design & Prototyping",
      description:
        "We craft intuitive experiences focused on usability and visual impact.",
    },

    {
      number: "04",
      title: "Development",
      description:
        "Transforming ideas into scalable and high-performing digital solutions.",
    },

    {
      number: "05",
      title: "Testing & Optimization",
      description:
        "Every detail is tested to ensure quality, responsiveness, and performance.",
    },

    {
      number: "06",
      title: "Launch & Support",
      description:
        "Deployment followed by ongoing support to ensure long-term success.",
    },
  ];

  return (
    <section className="py-5">

      <div className="content-container">

        {/* Hero */}

        <Row className="mb-5">

          <Col lg={8}>

            <p className="text-uppercase fw-semibold text-muted mb-3">
              ✦ OUR PROCESS ✦
            </p>
            <TextReveal className="fw-bold mb-4">
              How We Bring Ideas to Life
            </TextReveal>

            <p
              className="text-muted"
              style={{ maxWidth: "700px" }}
            >
              A collaborative approach designed to transform
              ideas into meaningful digital experiences.
            </p>

          </Col>

        </Row>

        {/* Timeline */}

        <div className="timeline">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`timeline-item ${index % 2 === 0
                  ? "left"
                  : "right"
                }`}
            >

              <Card className="timeline-card border-0">

                <Card.Body className="p-5">

                  <div className="timeline-number mb-3">
                    {step.number}
                  </div>

                  <h3 className="fw-bold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted">
                    {step.description}
                  </p>

                </Card.Body>

              </Card>

            </div>
          ))}

        </div>

        {/* CTA */}

        <Row className="justify-content-center mt-5 pt-5">

          <Col lg={8}>

            <Card className="cta-card border-0">

              <Card.Body className="text-center py-5">

                <h2 className="fw-bold mb-3">
                  Ready to Start Your Project?
                </h2>

                <p
                  className="text-muted mx-auto mb-4"
                  style={{ maxWidth: "600px" }}
                >
                  Let's collaborate to build digital
                  solutions that drive your business forward.
                </p>

                <Link to="/contact">

                  <Button
                    className="btn-primary-custom"
                    size="lg"
                  >
                    Start a Project
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

export default ProcessTimeline;