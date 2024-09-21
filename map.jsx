import React from 'react';
import './map.css';
import mapImage from '/Users/HP/travel/src/Assets/images/map.png' 

const MapSection = () => {
  return (
    <section className="map-section">
      <img src={mapImage} alt="World Map" className="map-image" />
      <div className="map-info">
        <div className="info-item">
          <h3>200+</h3>
          <p>Destinations Worldwide</p>
        </div>
        <div className="info-item">
          <h3>2000+</h3>
          <p>Customized Tour Packages</p>
        </div>
        <div className="info-item">
          <h3>30,000+</h3>
          <p>Happy Travelers</p>
        </div>
        <div className="info-item">
          <h3>100+</h3>
          <p>Luxury Accommodations</p>
        </div>
        <div className="info-item">
          <h3>50,000+</h3>
          <p>Successful Trips Planned</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;