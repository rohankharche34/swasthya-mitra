import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeaturesSection from '../components/FeaturesSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
    </>
  );
}

export default HomePage;