import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer-section">

      <Container fluid className="content-container">

        {/* Top Section */}
        <Row className="footer-top">

          {/* Services */}
          <Col lg={3} md={6} className="mb-5 mb-lg-0">

            <h6 className="footer-heading">
              SERVICES
            </h6>

            <ul className="footer-links">

              <li>
                <Link to="/services">
                  Web Design & Development
                </Link>
              </li>

              <li>
                <Link to="/services">
                  Business Automation
                </Link>
              </li>

              <li>
                <Link to="/services">
                  CRM Solutions
                </Link>
              </li>

              <li>
                <Link to="/services">
                  Lead Management Systems
                </Link>
              </li>

            </ul>

          </Col>

          {/* Company */}
          <Col lg={3} md={6} className="mb-5 mb-lg-0">

            <h6 className="footer-heading">
              COMPANY
            </h6>

            <ul className="footer-links">

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/process">
                  Our Process
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Start a Project
                </Link>
              </li>

            </ul>

          </Col>

          {/* Resources */}
          <Col lg={3} md={6} className="mb-5 mb-lg-0">

            <h6 className="footer-heading">
              RESOURCES
            </h6>

            <ul className="footer-links">

              <li>
                <Link to="/projects">
                  Our Work
                </Link>
              </li>

              <li>
                <Link to="/services">
                  Solutions
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Request a Quote
                </Link>
              </li>

              <li>
                <Link to="/about">
                  Why SITEIQUE
                </Link>
              </li>

            </ul>

          </Col>

          {/* Brand */}
          <Col lg={3} md={6}>

            <div className="footer-brand">

              <h2>
                SITEIQUE
              </h2>

              <p>
                Building digital experiences and
                business solutions that empower
                organizations to grow and thrive
                online.
              </p>

              <p>
  Building thoughtful digital experiences
  tailored to modern businesses.
</p>

<a
  href="mailto:siteique@outlook.com"
  className="footer-email"
>
  siteique@outlook.com
</a>

              <div className="footer-socials">

                <a
                  href="https://www.linkedin.com/company/siteique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin />
                </a>

                <a
                  href="https://instagram.com/siteique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <BsInstagram />
                </a>

                <a
                  href="https://github.com/siteique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <BsGithub />
                </a>

                

              </div>

            </div>

          </Col>

        </Row>

        {/* Bottom Section */}
        <Row className="footer-bottom align-items-center">

          <Col md={8} className="mb-3 mb-md-0">

            <div className="footer-legal">

              <Link to="/">
                Privacy Policy
              </Link>

              <span>|</span>

              <Link to="/">
                Terms of Service
              </Link>

              <span>|</span>

              <Link to="/">
                Accessibility
              </Link>

            </div>

          </Col>

          <Col md={4} className="text-md-end">

            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} SITEIQUE.
              All rights reserved.
            </p>

          </Col>

        </Row>

      </Container>

    </footer>
  );
}

export default Footer;