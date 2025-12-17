import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Breathing from './components/Breathing'; // Reused structure
import Stretching from './components/Stretching'; // Reused structure
import HospitalServices from './components/HospitalServices'; // Reused structure
import AIDiagnosis from './components/AIDiagnosis';
import Footer from './components/Footer';
import AmbulanceFloat from './components/AmbulanceFloat';
import OnlinePharmacy from './components/OnlinePharmacy';
import PaymentCrypto from './components/PaymentCrypto';
import MapLocator from './components/MapLocator';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <Breathing />
        <Stretching />
        <OnlinePharmacy />
        <PaymentCrypto />
        <HospitalServices />
        <MapLocator />
        <AIDiagnosis />
      </main>
      <Footer />
      <AmbulanceFloat />
    </div>
  );
}

export default App;