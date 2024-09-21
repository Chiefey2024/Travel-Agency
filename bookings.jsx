import React from 'react';
import './bookings.css';
import chooseDestinationImage from '/Users/HP/travel/src/Assets/images/choosedes.png'
import makePaymentImage from '/Users/HP/travel/src/Assets/images/mkepay.png'
import reachAirportImage from '/Users/HP/travel/src/Assets/images/reachairport.png'
import greeceImage from '/Users/HP/travel/src/Assets/images/trip to rome.jpg';

const Bookings = () => {
  return (
    <section className="booking-section">
      <div className="booking-steps">
        <h2 className="booking-header">Book Your Next Trip in 3 Easy Steps</h2>
        <div className="steps">
          <div className="step">
            <img src={chooseDestinationImage} alt="Choose Destination" className="step-image" />
            <h3>1. Choose Destination</h3>
          </div>
          <div className="step">
            <img src={makePaymentImage} alt="Make Payment" className="step-image" />
            <h3>2. Make Payment</h3>
          </div>
          <div className="step">
            <img src={reachAirportImage} alt="Reach Airport" className="step-image" />
            <h3>3. Reach Airport on Selected Date</h3>
          </div>
        </div>
      </div>
      <div className="ongoing-trips">
        <div className="trip-info">
          <img src={greeceImage} alt="Trip to Greece" className="greece-image" />
          <h3>Trip to Greece</h3>
          <p>Ongoing</p>
        </div>
        <div className="trip-info">
          <h3>Trip to Rome</h3>
          <p>Ongoing</p>
        </div>
      </div>
    </section>
  );
};


export default Bookings;
