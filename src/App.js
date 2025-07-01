import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import VisionSection from './components/VisionSection';
import TeamSection from './components/TeamSection';
import BenefitsSection from './components/BenefitsSection';
import RegistrationSection from './components/RegistrationSection';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.assign("https://growth91.com/FutureUnicorn");
    }, 150000); // 2 minutes 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      <VisionSection />
      <TeamSection />
      <BenefitsSection />
      <RegistrationSection />
    </div>
  );
}

export default App;
