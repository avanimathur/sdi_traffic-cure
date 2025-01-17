import React from 'react';
import HomePage from './components/home/home';
import RewardsPage from './pages/RewardsPage';
import Map from './pages/Map' ;

function App() {
  return (
    <div>
      <HomePage />
      <Route path="/rewards" element={<RewardsPage />} />
      <Route path="/map" element={<Map />} />
    </div>

  );
}

export default App;
