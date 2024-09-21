import React from 'react';
import './testimonial.css';
import test1 from '/Users/HP/travel/src/Assets/images/1.png'
import test2 from '/Users/HP/travel/src/Assets/images/2.png'
import test3 from '/Users/HP/travel/src/Assets/images/6.png'
import test4 from '/Users/HP/travel/src/Assets/images/4.png'
import test5 from '/Users/HP/travel/src/Assets/images/5.png'
import test6 from '/Users/HP/travel/src/Assets/images/6.png'
import test7 from '/Users/HP/travel/src/Assets/images/7.png'
import test8 from '/Users/HP/travel/src/Assets/images/8.png'
import test9 from '/Users/HP/travel/src/Assets/images/9.png'
import test10 from '/Users/HP/travel/src/Assets/images/10.png'
const testimonials = [
  {
    name: 'Emmanuel O.',
    date: 'November 30 2023',
    message: 'Amazing experience! I loved every moment of my trip.',
    image: test1, 
    rating: 5,
    backgroundColor: '#ffebee',
  },
  {
    name: 'Kunle Bamidele',
    date: 'April 5 2024',
    message: 'An unforgettable Time! Highly recommend.',
    image: test2,
    rating: 5,
    backgroundColor: '#e1f5fe',
  },
  {
    name: 'Samuel P.',
    date: 'August 20 2024',
    message: 'Fantastic service and beautiful destinations.',
    image: test3,
    rating: 5,
    backgroundColor: '#fce4ec',
  },
  {
    name: 'Dominion W.',
    date: 'October 5 2017',
    message: 'Best trip ever! I will definitely travel again.',
    image: test4,
    rating: 5,
    backgroundColor: '#e8f5e9',
  },
  {
    name: 'Barbie B.',
    date: 'September 2 2020',
    message: 'A well-organized trip with great guides.',
    image: test5,
    rating: 5,
    backgroundColor: '#fffde7',
  },
  {
    name: 'Kenny A.',
    date: 'July 11 2022',
    message: 'Exceeded my expectations! Amazing experiences.',
    image: test6,
    rating: 5,
    backgroundColor: '#e3f2fd',
  },
  {
    name: 'Ezeji U.',
    date: 'March 20 2019',
    message: 'Incredible value for money and wonderful memories.',
    image: test7,
    rating: 5,
    backgroundColor: '#f1f8e9',
  },
  {
    name: 'Chigoziem N.',
    date: 'January 10 2015',
    message: 'I loved every part of my journey! Will book again.',
    image: test8,
    rating: 5,
    backgroundColor: '#ffe0b2',
  },
  {
    name: 'Tunmise O',
    date: 'May 7, 2019',
    message: 'Excellent organization and breathtaking views.',
    image: test9,
    rating: 5,
    backgroundColor: '#e1bee7',
  },
  {
    name: 'Molabo D.',
    date: 'December 29, 2020',
    message: 'A trip of a lifetime! Thanks for the amazing service.',
    image: test10,
    rating: 5,
    backgroundColor: '#ffccbc',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-header">What Our Travelers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-date">{testimonial.date}</p>
            <p className="testimonial-message">{testimonial.message}</p>
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
