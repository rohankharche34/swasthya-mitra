import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

function HealthTipsPage() {
  return (
    <Container className="py-5">
      <Fade direction="down" triggerOnce>
        <h1 className="mb-4">Health Tips & Articles</h1>
        <p className="lead text-muted">Stay informed with our latest health and wellness articles.</p>
      </Fade>
      
      <Row className="mt-4">
        <Col md={6} lg={4} className="mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <Card className="h-100 shadow-sm how-it-works-card">
              <Card.Body>
                <Card.Title>The Importance of Hydration</Card.Title>
                <Card.Text>
                  Learn why drinking enough water is crucial for your body's functions, from energy levels to brain function.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Fade direction="up" delay={300} triggerOnce>
            <Card className="h-100 shadow-sm how-it-works-card">
              <Card.Body>
                <Card.Title>7 Tips for a Better Night's Sleep</Card.Title>
                <Card.Text>
                  Quality sleep is as important as diet and exercise. Discover 7 tips to improve your sleep hygiene.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Fade direction="up" delay={400} triggerOnce>
            <Card className="h-100 shadow-sm how-it-works-card">
              <Card.Body>
                <Card.Title>Mindful Eating: A Beginner's Guide</Card.Title>
                <Card.Text>
                  Explore the practice of mindful eating to improve your digestion, manage weight, and enjoy your food more.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default HealthTipsPage;