import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import "./Navbar2.css";

const categories = [
  { name: "Mobiles", icon: "📱" },
  { name: "Fashion", icon: "👕" },
  { name: "Electronics", icon: "💻" },
  { name: "Appliances", icon: "🧊" },
  { name: "Grocery", icon: "🛒" },
  { name: "Home", icon: "🏠" },
  { name: "Beauty", icon: "💄" },
  { name: "Toys", icon: "🧸" },
  { name: "Bikes", icon: "🏍️" },
  { name: "Books", icon: "📚" },
];

const Navbar2 = () => {
  return (
    <>
      <Navbar expand="md" className="custom-navbar shadow-sm" fixed="top">
        <Container fluid>
         
          <Navbar.Brand href="#" className="brand-name">
            🛍️ KamleshKart
          </Navbar.Brand>

          
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
          
            <Form className="d-flex search-form mx-auto">
              <Form.Control
                type="search"
                placeholder="Search for products, brands and more..."
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="light" className="search-btn">
                Search
              </Button>
            </Form>

          
            <Nav className="ms-auto my-2 my-lg-0 nav-links">
              <Nav.Link href="/user/login" className="nav-link-custom">
                Login
              </Nav.Link>
              <Nav.Link href="/seller" className="nav-link-custom">
                🛒 Cart
              </Nav.Link>
              <Nav.Link href="/seller/becomeSeller" className="nav-link-custom">
                Become a Seller
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
      <div className="category-bar">
        {categories.map((cat, index) => (
          <div className="category-item" key={index}>
            <div className="category-icon">{cat.icon}</div>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar2;

