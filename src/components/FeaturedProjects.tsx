import {
  Row,
  Col,
  Card,
  Badge,
  Button
} from "react-bootstrap";


import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";
import MagneticButton from "../components/MagneticButton";
import {
  BsCheckCircle
} from "react-icons/bs";
import Reveal from "./Reveal";
import StaggerContainer from "./StaggerContainer";

function FeaturedProjects() {

  const projects = [
    {
      id: "prep-ai",
      title: "Prep-AI",
      category: "AI Platform",

      description:
        "An AI-powered notes management platform designed to streamline learning and information organization.",

      image: "/projects/prep-ai.png",   // ← ADD HERE

      highlights: [
        "AI Integration",
        "Secure File Management",
        "Modern User Experience",
      ],

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      id: "expense-tracker",
      title: "Expense Tracker",
      category: "Financial Application",

      description:
        "A finance management application that helps users monitor spending habits and manage budgets effectively.",

      image: "/projects/expense-tracker.png",

      highlights: [
        "Expense Analytics",
        "Responsive Design",
        "User-Friendly Interface",
      ],

      technologies: [
        "React",
        "TypeScript",
      ],
    },

    {
      id: "siteique",
      title: "SITEIQUE Agency Website",
      category: "Agency Platform",

      description:
        "A premium digital presence designed to showcase services and generate client leads.",

      image: "/projects/siteique.png",

      highlights: [
        "Lead Generation Focus",
        "Modern Design",
        "Conversion Optimization",
      ],

      technologies: [
        "React",
        "Bootstrap",
      ],
    },
  ];

  return (
    <section className="py-5">

      <div className="content-container">

        {/* Hero */}

        <Row className="mb-5">

          <Col lg={8}>

            <p className="text-uppercase fw-semibold text-muted mb-3">
              ✦ OUR WORK ✦
            </p>

            <TextReveal className="fw-bold mb-4">
              Building Digital Experiences That Empower Businesses
            </TextReveal>

            <p
              className="text-muted"
              style={{ maxWidth: "700px" }}
            >
              Every project represents our commitment to
              creating impactful digital solutions that
              combine functionality, design, and business value.
            </p>

          </Col>

        </Row>

        {/* Projects */}
        <StaggerContainer>
          <Row className="g-4">

            {projects.map((project) => (
              <Col
                key={project.title}
                lg={4}
              >
                <Reveal>
                  <Card id={project.id}
                   className="service-card border-0 h-100">

                    <div className="project-preview">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />

                    </div>

                    <Card.Body className="p-5">

                      <Badge
                        bg="light"
                        text="dark"
                        className="mb-3"
                      >
                        {project.category}
                      </Badge>

                      <Card.Title
                        className="fw-bold fs-3 mb-3"
                      >
                        {project.title}
                      </Card.Title>

                      <Card.Text
                        className="text-muted mb-4"
                      >
                        {project.description}
                      </Card.Text>

                      <div className="mb-4">

                        {project.highlights.map((item) => (
                          <div
                            key={item}
                            className="d-flex align-items-center mb-2"
                          >

                            <BsCheckCircle
                              className="me-2"
                              color="#2563EB"
                            />

                            <span>{item}</span>

                          </div>
                        ))}

                      </div>

                      <div className="d-flex flex-wrap gap-2">

                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            bg="secondary"
                          >
                            {tech}
                          </Badge>
                        ))}

                      </div>

                    </Card.Body>

                  </Card>
                </Reveal>

              </Col>

            ))}

          </Row>
        </StaggerContainer>
        {/* Process Section */}

        <Row className="mt-5 pt-5">

          <Col lg={8}>

            <p className="text-uppercase fw-semibold text-muted mb-3">
              ✦ OUR APPROACH ✦
            </p>

            <h2 className="fw-bold mb-4">
              Focused on Business Impact
            </h2>

            <p
              className="text-muted"
              style={{ maxWidth: "700px" }}
            >
              We combine thoughtful strategy,
              user-centered design, and modern
              development practices to deliver
              solutions that drive measurable value.
            </p>

          </Col>

        </Row>

        {/* CTA */}

        <Row className="justify-content-center mt-5">

          <Col lg={8}>

            <Card className="cta-card border-0">

              <Card.Body className="text-center py-5">

                <h2 className="fw-bold mb-3">
                  Ready to Start Your Next Project?
                </h2>

                <p
                  className="text-muted mx-auto mb-4"
                  style={{ maxWidth: "600px" }}
                >
                  Let's work together to create
                  digital solutions tailored to
                  your business goals.
                </p>

                <Link to="/contact">

                  <MagneticButton>

                    <Button
                      className="btn-primary-custom"
                      size="lg"
                    >
                      Start a Project
                    </Button>

                  </MagneticButton>

                </Link>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </div>

    </section>
  );
}

export default FeaturedProjects;