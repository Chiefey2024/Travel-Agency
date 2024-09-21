
import React from 'react';
import './ourMission.css';
import World from '/Users/HP/travel/src/Assets/images/worlds.png'

const ourMission = () => {
  return (
    <section className="about-section">
      <h2 className="about-header">About Us</h2>
      <p className="about-text">
        Embark on a transformative journey where every destination on your path to well-being is enriched by top-notch guidance, cutting-edge amenities, and a dynamic community committed to your success. Let us be your travel partner to a healthier, more vibrant you!
      </p>

      <div className="mission-container">
        <div className="about-image">
          <img src={World} alt="Transformative Journey" />
        </div>
        <div className="mission-section">
          <h2 className="mission-header">Our Mission</h2>
          <p className="mission-text">
            We curate exceptional travel experiences with personalized itineraries, expert guidance, and a dedicated community. Our holistic approach combines adventure, relaxation, and cultural immersion, offering unforgettable journeys that rejuvenate mind, body, and spirit. Whether you're exploring for the first time or a seasoned traveler, our tailored trips and supportive community will help you create lifelong memories and enrich your travels.
          </p>
          <div className="watermark"></div>
        </div>
      </div>
    </section>
  );
};

export default ourMission;

