import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsGlobe2,
  BsGear,
  BsPeople
} from "react-icons/bs";
import Reveal from "../components/Reveal";
import StaggerContainer from "../components/StaggerContainer";
import TextReveal from "../components/TextReveal";
import MagneticButton from "../components/MagneticButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";



function Home() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const orb = orbRef.current;

    if (!orb) {
      console.log("Orb not found");
      return;
    }

    console.log("Orb found!");

    gsap.to(orb, {
      x: 200,
      y: 100,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

  }, []);

  const featuredProjects = [
    {
      id: "prep-ai",

      title: "Prep-AI",

      description:
        "AI-powered note-taking platform with secure file management and intelligent organization.",

      category: "Web Application",

      image: "/projects/prepai.png",
    },

    {
      id: "expense-tracker",

      title: "Expense Tracker",

      description:
        "Personal finance application for tracking expenses and visualizing spending habits.",

      category: "Finance Application",

      image: "/projects/expense-tracker.png",
    },

    {
      id: "siteique",

      title: "SITEIQUE Portfolio",

      description:
        "Premium agency website featuring interactive experiences and modern design.",

      category: "Agency Website",

      image: "/projects/siteique.png",
    },
  ];



  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your business goals, challenges, and project requirements.",
    },

    {
      number: "02",
      title: "Strategy",
      description:
        "Planning the ideal approach and defining a roadmap for success.",
    },

    {
      number: "03",
      title: "Design",
      description:
        "Crafting intuitive experiences and modern interfaces tailored to your audience.",
    },

    {
      number: "04",
      title: "Development",
      description:
        "Building scalable, high-performance digital solutions with modern technologies.",
    },

    {
      number: "05",
      title: "Launch",
      description:
        "Deploying, testing, and supporting your solution for long-term growth.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Tailored Solutions",
      description:
        "Every project is designed around your unique business goals and requirements.",
    },

    {
      title: "Modern Technologies",
      description:
        "We build scalable, secure, and high-performance solutions using industry best practices.",
    },

    {
      title: "Transparent Communication",
      description:
        "Regular updates and open collaboration ensure you're involved throughout the process.",
    },

    {
      title: "Long-Term Partnership",
      description:
        "Our relationship doesn't end at launch. We support your continued growth and success.",
    },
  ];

  return (
    <>
      {/* Hero Section */}

      <section className="hero-section">
        <div
          ref={orbRef}
          className="gradient-orb"
        ></div>
        <StaggerContainer>
          <Container fluid className="px-4 px-lg-5">

            <Row className="align-items-center min-vh-75 py-5">

              <Col
                xs={12}
                lg={8}
                className="position-relative"
              >

                <p className="text-uppercase fw-semibold text-muted mb-4">
                  ✦ WEB DESIGN • DEVELOPMENT • AUTOMATION ✦
                </p>
                <TextReveal className="fw-bold mb-4 hero-title">
                  Bringing Businesses to The World Wide Web...
                </TextReveal>
                <Reveal>
                  <p
                    className="lead text-muted mb-5 hero-description"
                  >
                    From modern websites to custom business tools, we create digital solutions designed to improve efficiency, enhance customer engagement and support business to build and grow a strong presence online.
                  </p>
                </Reveal>
                <Reveal>
                  <div className="d-flex flex-column flex-sm-row gap-3">

                    <Link to="/projects">

                      <MagneticButton>

                        <Button
                          variant=""
                          className="btn-primary-custom"
                          size="lg"
                        >
                          View Projects
                        </Button>

                      </MagneticButton>

                    </Link>

                    <Link to="/contact">

                      <MagneticButton>

                        <Button
                          variant=""
                          className="btn-secondary-custom"
                          size="lg"
                        >
                          Get In Touch
                        </Button>

                      </MagneticButton>

                    </Link>

                  </div>
                </Reveal>
              </Col>

            </Row>

          </Container>
        </StaggerContainer>
      </section>

      {/* Services Section */}

      <section className="py-5">

        <Container className="py-5">
          <StaggerContainer>
            <Row className="justify-content-center mb-5">

              <Col
                lg={8}
                className="text-center"
              >

                <h2 className="fw-bold display-5 mb-3">
                  What We Bring to the Table
                </h2>

                <p
                  className="text-muted mx-auto"
                  style={{
                    maxWidth: "700px",
                  }}
                >
                  We create digital solutions that strengthen your online presence,
                  improve operational efficiency, and support sustainable business growth.
                </p>

              </Col>

            </Row>
          </StaggerContainer>
          <StaggerContainer>
            <Row className="g-4">

              <Col md={6} lg={4}>
                <Reveal>

                  <Card className="service-card border-0 h-100">

                    <Card.Body className="p-5 d-flex flex-column">

                      <div className="service-icon mb-4">
                        <BsGlobe2 size={35} />
                      </div>

                      <Card.Title className="fw-bold fs-4 mb-3">
                        Web Design & Development
                      </Card.Title>

                      <Card.Text className="text-muted">
                        Modern, responsive websites designed to establish a strong digital presence and create exceptional user experiences.
                      </Card.Text>

                    </Card.Body>

                  </Card>

                </Reveal>
              </Col>

              <Col md={6} lg={4}>
                <Reveal>
                  <Card className="service-card border-0 h-100">

                    <Card.Body className="p-5 d-flex flex-column">

                      <div className="service-icon mb-4">
                        <BsGear size={35} />
                      </div>

                      <Card.Title className="fw-bold fs-4 mb-3">
                        Business Process Automation
                      </Card.Title>

                      <Card.Text className="text-muted">
                        Custom web applications that simplify operations through workflow automation, booking systems, and internal tools.
                      </Card.Text>

                    </Card.Body>

                  </Card>
                </Reveal>
              </Col>

              <Col md={6} lg={4}>
                <Reveal>
                  <Card className="service-card border-0 h-100">

                    <Card.Body className="p-5 d-flex flex-column">

                      <div className="service-icon mb-4">
                        <BsPeople size={35} />
                      </div>

                      <Card.Title className="fw-bold fs-4 mb-3">
                        Lead & Client Management
                      </Card.Title>

                      <Card.Text className="text-muted">
                        Tailored systems that help businesses organize leads, nurture client relationships, and streamline follow-ups.
                      </Card.Text>

                    </Card.Body>

                  </Card>
                </Reveal>
              </Col>

            </Row>
          </StaggerContainer>

        </Container>

      </section>

      {/* Featured Projects Section */}

      <section className="py-5">

        <Container className="py-5">

          <Reveal>

            <Row className="justify-content-between align-items-end mb-5">

              <Col lg={8}>

                <p className="text-uppercase fw-semibold text-muted mb-3">
                  ✦ FEATURED WORK ✦
                </p>

                <TextReveal
                  as="h2"
                  className="fw-bold display-5 mb-3"
                >
                  Projects That Deliver Results
                </TextReveal>

                <p
                  className="text-muted"
                  style={{ maxWidth: "700px" }}
                >
                  A selection of digital solutions designed
                  to solve real business problems and create
                  meaningful impact.
                </p>

              </Col>

              <Col
                lg={4}
                className="text-lg-end mt-4 mt-lg-0"
              >

                <Link to="/projects">

                  <Button
                    variant=""
                    className="btn-secondary-custom"
                  >
                    View All Projects
                  </Button>

                </Link>

              </Col>

            </Row>

          </Reveal>

          <StaggerContainer>

            <Row className="g-4">

              {featuredProjects.map((project) => (

                <Col
                  key={project.title}
                  lg={4}
                  md={6}
                >

                  <Reveal>
                    <Link

                      to={`/projects#${project.id}`}

                      className="text-decoration-none"

                    >

                      <Card className="project-card border-0 h-100">

                        <div className="project-image">

                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-image-img"
                          />

                          <div className="project-overlay">

                            <span className="project-category">

                              {project.category}

                            </span>

                          </div>

                        </div>

                        <Card.Body className="p-4">

                          <Card.Title className="fw-bold fs-4 mb-3">

                            {project.title}

                          </Card.Title>

                          <Card.Text className="text-muted">

                            {project.description}

                          </Card.Text>

                        </Card.Body>

                      </Card>

                    </Link>

                  </Reveal>

                </Col>

              ))}

            </Row>

          </StaggerContainer>

        </Container>

      </section>

      {/* Process Preview Section */}

      <section className="py-5">

        <Container className="py-5">

          <Reveal>

            <Row className="justify-content-between align-items-end mb-5">

              <Col lg={8}>

                <p className="text-uppercase fw-semibold text-muted mb-3">
                  ✦ OUR PROCESS ✦
                </p>

                <TextReveal
                  as="h2"
                  className="fw-bold display-5 mb-3"
                >
                  How We Bring Ideas to Life
                </TextReveal>

                <p
                  className="text-muted"
                  style={{ maxWidth: "700px" }}
                >
                  Our collaborative process ensures transparency,
                  efficiency, and exceptional results at every stage.
                </p>

              </Col>

              <Col
                lg={4}
                className="text-lg-end mt-4 mt-lg-0"
              >

                <Link to="/process">

                  <Button
                    variant=""
                    className="btn-secondary-custom"
                  >
                    Learn More
                  </Button>

                </Link>

              </Col>

            </Row>

          </Reveal>

          <StaggerContainer>

            <Row className="g-4">

              {processSteps.map((step) => (

                <Col
                  key={step.number}
                  lg={4}
                  md={6}
                >

                  <Reveal>

                    <Card className="process-preview-card border-0 h-100">

                      <Card.Body className="p-4">

                        <div className="process-number mb-4">

                          {step.number}

                        </div>

                        <Card.Title className="fw-bold fs-4 mb-3">

                          {step.title}

                        </Card.Title>

                        <Card.Text className="text-muted">

                          {step.description}

                        </Card.Text>

                      </Card.Body>

                    </Card>

                  </Reveal>

                </Col>

              ))}

            </Row>

          </StaggerContainer>

        </Container>

      </section>

      {/* Why Choose SITEIQUE */}

      <section className="py-5">

        <Container className="py-5">

          <Reveal>

            <Row className="justify-content-center text-center mb-5">

              <Col lg={8}>

                <p className="text-uppercase fw-semibold text-muted mb-3">
                  ✦ WHY CHOOSE SITEIQUE ✦
                </p>

                <TextReveal
                  as="h2"
                  className="fw-bold display-5 mb-3"
                >
                  More Than Just Development
                </TextReveal>

                <p
                  className="text-muted mx-auto"
                  style={{
                    maxWidth: "700px",
                  }}
                >
                  We focus on delivering digital solutions that create
                  measurable value and long-term impact for your business.
                </p>

              </Col>

            </Row>

          </Reveal>

          <StaggerContainer>

            <Row className="g-4">

              {whyChooseUs.map((item) => (

                <Col
                  key={item.title}
                  lg={6}
                >

                  <Reveal>

                    <Card className="why-card border-0 h-100">

                      <Card.Body className="p-5">

                        <div className="why-icon mb-4">

                          ✓

                        </div>

                        <Card.Title className="fw-bold fs-4 mb-3">

                          {item.title}

                        </Card.Title>

                        <Card.Text className="text-muted">

                          {item.description}

                        </Card.Text>

                      </Card.Body>

                    </Card>

                  </Reveal>

                </Col>

              ))}

            </Row>

          </StaggerContainer>

        </Container>

      </section>

      {/* CTA Section */}

      <section className="py-5">

        <Container className="py-5">

          <Reveal>

            <Card className="cta-section border-0">

              <Card.Body className="text-center py-5 px-4">

                <p className="text-uppercase fw-semibold text-muted mb-3">
                  ✦ LET'S BUILD TOGETHER ✦
                </p>

                <TextReveal
                  as="h2"
                  className="fw-bold display-5 mb-4"
                >
                  Ready to Bring Your Vision to Life?
                </TextReveal>

                <p
                  className="text-muted mx-auto mb-5"
                  style={{
                    maxWidth: "700px",
                  }}
                >
                  Whether you're looking for a modern website,
                  business automation solutions, or custom digital
                  experiences, SITEIQUE is here to help transform
                  your ideas into reality.
                </p>

                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">

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

                  <Link to="/projects">

                    <MagneticButton>

                      <Button
                        className="btn-secondary-custom"
                        size="lg"
                      >
                        Explore Our Work
                      </Button>

                    </MagneticButton>

                  </Link>

                </div>

              </Card.Body>

            </Card>

          </Reveal>

        </Container>

      </section>


    </>
  );
}

export default Home;