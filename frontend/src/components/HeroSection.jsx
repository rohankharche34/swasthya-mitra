import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HeartPulseFill } from 'react-bootstrap-icons';
import { Fade } from "react-awesome-reveal"; // <-- Import

function HeroSection() {
  return (
    <Container fluid className="text-center p-5 hero-gradient">
      <Row className="justify-content-md-center py-5">
        <Col md={8}>
          <Fade direction="down" triggerOnce>
            <HeartPulseFill size={60} className="mb-3 pulsing-icon" /> {/* <-- Added Icon */}
            <h1 className="display-4 fw-bold">Welcome Back!</h1>
            <p className="lead fs-4 text-muted">
              Your personal health assistant. Ready to check your symptoms or explore health guidance.
            </p>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <Button 
              as={Link} 
              to="/dashboard" 
              variant="success" 
              size="lg"
            >
              Go to Symptom Checker
            </Button>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;