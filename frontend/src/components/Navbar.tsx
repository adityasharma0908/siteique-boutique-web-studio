import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
    return (
        <Navbar
    expand="lg"
    fixed="top"
    className={`custom-navbar ${
        scrolled ? "navbar-scrolled" : ""
    }`}
>
            <Container fluid className="px-4 px-lg-5">

                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        letterSpacing: "-0.06em",
                        fontSize: "2rem",
                        color: "#111827",
                    }}
                >
                    SITEIQUE
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto align-items-lg-center gap-lg-3">

                        <Nav.Link
                            as={Link}
                            to="/"
                            className="nav-link-custom"
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/services"
                            className="nav-link-custom"
                        >
                            Services
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className="nav-link-custom"
                        >
                            Our Work
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/process"
                            className="nav-link-custom"
                        >
                            Process
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="nav-link-custom"
                        >
                            About
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="nav-link-custom"
                        >
                            Contact
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;