import React from 'react';
import './App.css';
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";

function App() {
  return (
      <div>
          <Navbar bg="light" expand="lg">
              <Container>
                  <Navbar.Brand href="#home">React Demo</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#">Home</Nav.Link>

                          <Nav.Link href="#">Link</Nav.Link>

                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#">Test</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#">Another test</NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

          <Container>
              <Row>
                  <Col>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://engineering.fb.com/wp-content/uploads/2016/09/gjak3qbrgsjmr1afaaaaaada9cc2bj0jaaab.jpg" />
                          <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                      </Card>
                  </Col>
              </Row>

              <br/>

              <Row>
                  <Col>
                      <Button variant={"primary"} onClick={() => alert(1)}>test</Button>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;
