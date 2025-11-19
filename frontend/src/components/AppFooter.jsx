import React from 'react';
import { Container } from 'react-bootstrap';

function AppFooter() {
  return (
    <footer className="py-4 text-white text-center footer-dark"> {/* <-- Updated class */}
      <Container>
        <p className="mb-0">&copy; 2025 Swasthya Mitra. All rights reserved.</p>
        <p className="mb-0 small">This is a project for educational purposes. Not intended for medical advice.</p>
      </Container>
    </footer>
  );
}

export default AppFooter;