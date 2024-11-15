import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HealthSupport from './pages/HealthSupport';
import PetDating from './pages/PetDating';
import Marketplace from './pages/Marketplace';
import Community from './pages/Community';
import HealthMonitoring from './pages/HealthMonitoring';
import VirtualVets from './pages/VirtualVets';
import SmartScheduling from './pages/SmartScheduling';
import PetLocation from './pages/PetLocation';
import HealthGuard from './pages/HealthGuard';
import Rewards from './pages/Rewards';
import About from './pages/about'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="health-support" element={<HealthSupport />} />
          <Route path="pet-dating" element={<PetDating />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="community" element={<Community />} />
          <Route path="health-monitoring" element={<HealthMonitoring />} />
          <Route path="virtual-vets" element={<VirtualVets />} />
          <Route path="smart-scheduling" element={<SmartScheduling />} />
          <Route path="pet-location" element={<PetLocation />} />
          <Route path="health-guard" element={<HealthGuard />} />
          <Route path="rewards" element={<Rewards />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
