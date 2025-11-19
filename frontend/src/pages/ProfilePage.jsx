import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

function ProfilePage() {
  return (
    <Container className="py-5">
      <Fade direction="down" triggerOnce>
        <h1 className="mb-4">My Profile</h1>
      </Fade>

      <Row>
        <Col md={4}>
          <Fade direction="left" delay={200} triggerOnce>
            <Card className="text-center p-4">
              <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/150" 
                className="rounded-circle mx-auto" 
                style={{ width: '150px', height: '150px' }}
              />
              <Card.Body>
                <Card.Title className="h4">John Doe</Card.Title>
                <Card.Text className="text-muted">john.doe@example.com</Card.Text>
                <Button variant="outline-primary" size="sm">Change Photo</Button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={8}>
          <Fade direction="right" delay={300} triggerOnce>
            <Card>
              <Card.Body className="p-4">
                <h3 className="mb-4">Account Details</h3>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" defaultValue="John Doe" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" defaultValue="john.doe@example.com" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBirthDate">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Prefer not to say</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;