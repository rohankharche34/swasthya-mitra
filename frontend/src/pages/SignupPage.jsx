import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HeartPulse } from 'react-bootstrap-icons';

function SignupPage() {
  return (
    <div className="auth-page-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="auth-card">
              <Row className="g-0">
                <Col md={6} className="auth-brand-section">
                  <HeartPulse size={50} className="mb-3" />
                  <h2 className="fw-bold">Join Us</h2>
                  <p className="mt-3">
                    Create your free account to get personalized health insights and guidance.
                  </p>
                </Col>
                
                <Col md={6} className="auth-form-section">
                  <h3 className="text-center mb-4 fw-bold">Create Account</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <div className="d-grid">
                       {/* This button also links to /home to simulate signup */}
                      <Button as={Link} to="/home" variant="primary" type="submit">
                        Create Account
                      </Button>
                    </div>
                  </Form>
                  <div className="text-center mt-3">
                    <small>
                      Already have an account? <Link to="/">Log In</Link>
                    </small>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignupPage;