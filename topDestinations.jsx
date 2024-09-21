import React from 'react';
import './topDestinations.css';
import bali from '/Users/HP/travel/src/Assets/images/bali.png'
import paris from '/Users/HP/travel/src/Assets/images/paris.png'
import tokyo from '/Users/HP/travel/src/Assets/images/japan.png'
import grand from '/Users/HP/travel/src/Assets/images/grandcanyon.png'
import santorini from '/Users/HP/travel/src/Assets/images/santorini.png'
import newyork from '/Users/HP/travel/src/Assets/images/newyork.png'
import rome from '/Users/HP/travel/src/Assets/images/rome.png'
import sydney from '/Users/HP/travel/src/Assets/images/sydney.png'
import rio from '/Users/HP/travel/src/Assets/images/brazil.png'
import machu from '/Users/HP/travel/src/Assets/images/machu.png'
import cairo from '/Users/HP/travel/src/Assets/images/egypt.png'
import beijing from '/Users/HP/travel/src/Assets/images/beiging.png'
import marrakesh from '/Users/HP/travel/src/Assets/images/marakesh.png'
import istanbul from '/Users/HP/travel/src/Assets/images/istanbul.png'
import delhi from '/Users/HP/travel/src/Assets/images/delhi.png'
import athens from '/Users/HP/travel/src/Assets/images/athens.png'
import mexico from '/Users/HP/travel/src/Assets/images/mexico.png'

const topDestinations = [
  {
    location: 'Bali, Indonesia',
    price: '$3,200',
    days: '7 Days',
    image: bali,
  },
  {
    location: 'Paris, France',
    price: '$4,500',
    days: '5 Days',
    image: paris,
  },
  {
    location: 'Tokyo, Japan',
    price: '$3,800',
    days: '6 Days',
    image: tokyo,
  },
];

const popularTours = [
  {
    location: 'Grand Canyon, USA',
    price: '$1600',
    days: '4 Days',
    image: grand,
  },
  {
    location: 'Santorini, Greece',
    price: '$2,500',
    days: '5 Days',
    image: santorini,
  },
  {
    location: 'New York City, USA',
    price: '$4,200',
    days: '3 Days',
    image: newyork,
  },
  {
    location: 'Rome, Italy',
    price: '$3,600',
    days: '4 Days',
    image: rome,
  },
  {
    location: 'Sydney, Australia',
    price: '$4,000',
    days: '6 Days',
    image: sydney,
  },
  {
    location: 'Rio de Janeiro, Brazil',
    price: '$3,300',
    days: '5 Days',
    image: rio,
  },
  {
    location: 'Machu Picchu, Peru',
    price: '$4,200',
    days: '7 Days',
    image: machu,
  },
];

const culturalTours = [
  {
    location: 'Cairo, Egypt',
    price: '$3,000',
    days: '5 Days',
    image: cairo,
  },
  {
    location: 'Beijing, China',
    price: '$3,700',
    days: '6 Days',
    image: beijing,
  },
  {
    location: 'Marrakech, Morocco',
    price: '$3,200',
    days: '4 Days',
    image: marrakesh,
  },
  {
    location: 'Istanbul, Turkey',
    price: '$3,400',
    days: '5 Days',
    image: istanbul,
  },
  {
    location: 'Delhi, India',
    price: '$2100',
    days: '7 Days',
    image: athens,
  },
  {
    location: 'Athens, Greece',
    price: '$3,300',
    days: '4 Days',
    image: delhi,
  },
  {
    location: 'Mexico City, Mexico',
    price: '$3,100',
    days: '5 Days',
    image: mexico,
  },
];

const TopDestinations = () => {
  return (
    <section className="top-destinations-section">
      <h2 className="section-header">Top Destinations</h2>
      <div className="destinations-container">
        {topDestinations.map((destination, index) => (
          <div className="destination-card" key={index} style={{ backgroundImage: `url(${destination.image})` }}>
            <div className="card-overlay">
              <h3 className="destination-location">{destination.location}</h3>
              <p className="destination-price">{destination.price}</p>
              <p className="destination-days">{destination.days}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-header">Find Popular Tours</h3>
      <div className="tours-container">
        {popularTours.map((tour, index) => (
          <div className="tour-card" key={index} style={{ backgroundImage: `url(${tour.image})` }}>
            <div className="card-overlay">
              <h3 className="tour-location">{tour.location}</h3>
              <p className="tour-price">{tour.price}</p>
              <p className="tour-days">{tour.days}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-header">Cultural Tours</h3>
      <div className="cultural-tours-container">
        {culturalTours.map((tour, index) => (
          <div className="tour-card" key={index} style={{ backgroundImage: `url(${tour.image})` }}>
            <div className="card-overlay">
              <h3 className="tour-location">{tour.location}</h3>
              <p className="tour-price">{tour.price}</p>
              <p className="tour-days">{tour.days}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
