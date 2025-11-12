import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import "./Navbar1.css";

const Navbar1 = () => {
  return (
    <Navbar expand="md" className="custom-navbar shadow-sm" fixed="top">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="#" className="brand-name">
          Kamlesh
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Search Bar (aligned left) */}
          <Form className="d-flex search-form mx-auto">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button variant="light" className="search-btn">
              Search
            </Button>
          </Form>

          {/* Navigation Links (aligned right) */}
          <Nav
            className="ms-auto my-2 my-lg-0 nav-links"
            navbarScroll
          >
            <Nav.Link href="/home" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="/features" className="nav-link-custom">
              Features
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
