import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { FileEarmarkPdfFill } from 'react-bootstrap-icons';
import { Fade } from 'react-awesome-reveal';

function ReportsPage() {
  return (
    <Container className="py-5">
      <Fade direction="down" triggerOnce>
        <h1 className="mb-4">My Health Reports</h1>
        <p className="lead text-muted">View your past symptom analyses and download your reports.</p>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <Card className="shadow-sm mt-4">
          <Card.Body>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Primary Symptoms</th>
                  <th>Predicted Condition</th>
                  <th>Report</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-10-28</td>
                  <td>Fever, Cough, Headache</td>
                  <td>Common Cold</td>
                  <td><Button variant="outline-primary" size="sm"><FileEarmarkPdfFill className="me-1" /> Download</Button></td>
                </tr>
                <tr>
                  <td>2025-09-15</td>
                  <td>Stomach Pain, Nausea</td>
                  <td>Gastritis</td>
                  <td><Button variant="outline-primary" size="sm"><FileEarmarkPdfFill className="me-1" /> Download</Button></td>
                </tr>
                <tr>
                  <td>2025-07-02</td>
                  <td>Itching, Red Rash</td>
                  <td>Allergic Reaction</td>
                  <td><Button variant="outline-primary" size="sm"><FileEarmarkPdfFill className="me-1" /> Download</Button></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Fade>
    </Container>
  );
}

export default ReportsPage;