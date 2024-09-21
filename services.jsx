import React from 'react';
import './services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Start Your Journey with a Free Travel Consultation',
      description: 'Explore With Us Today',
    },
    {
      id: 2,
      title: 'Hotel Reservations',
      description: 'Book hotels with filters for price, reviews, and amenities.',
    },
    {
      id: 3,
      title: 'Tour and Excursion Bookings',
      description: 'Book activities and excursions in advance for your destination.',
    },
    {
      id: 4,
      title: 'Travel Insurance',
      description: 'Purchase insurance policies for trip protection directly.',
    },
    {
      id: 5,
      title: 'Flight Bookings',
      description: 'Self-booking platform with price comparisons and flexible options.',
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-header">Our Services</h2>
      <div className="services-container">
        {servicesList.map(service => (
          <div key={service.id} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="learn-more-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
