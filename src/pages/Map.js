import React, { useState } from "react";
import "./Map.css";

const Map = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [showRoutes, setShowRoutes] = useState(false);

  const handleViewRoutes = () => {
    if (fromLocation && toLocation) {
      setShowRoutes(true);
      alert(`Showing routes from ${fromLocation} to ${toLocation}`);
    } else {
      alert("Please select both starting point and destination.");
    }
  };

  return (
    <div className="container">
      <h1>Alternate Routes</h1>
      <p>Choose your starting point and destination to view suggested alternative routes.</p>

      <div className="dropdown-container">
        <select
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
        >
          <option value="" disabled>
            Select From
          </option>
          <option value="Rohini Sector 13">Rohini Sector 13</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>

        <select
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
        >
          <option value="" disabled>
            Select To
          </option>
          <option value="Chandni Chowk Market">Chandni Chowk Market</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>

      <button className="view-routes-button" onClick={handleViewRoutes}>
        Choose Route
      </button>

      {showRoutes && (
        <div className="map-images">
          <img src="mapOption1.jpg" alt="Alternative Route 1" />
          <img src="mapOption2.jpg" alt="Alternative Route 2" />
          <img src="mapOption3.jpg" alt="Alternative Route 3" />
        </div>
      )}
    </div>
  );
};

export default Map;