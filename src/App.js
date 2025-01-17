import React from 'react';
import HomePage from './components/home/home';
import RewardsPage from './pages/RewardsPage';
import Map from './pages/Map' ;

function App() {
  return (
    <div>
      <HomePage />
      <Route path="/RewardsPage" element={<RewardsPage />} />
      <Route path="/Map" element={<Map />} />
    </div>

  );
}

export default App;
