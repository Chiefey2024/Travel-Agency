import React from 'react';
import './Featured.css';
import feature1 from '/Users/HP/travel/src/Assets/images/france.png';
import feature2 from '/Users/HP/travel/src/Assets/images/usa.png';
import feature3 from '/Users/HP/travel/src/Assets/images/london.png';
import feature4 from '/Users/HP/travel/src/Assets/images/usaC.png';
import { Card, Col, Container, Row } from 'react-bootstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const featureList = [
    {
      id: 1,
      image: feature1,
      title: "Paris, France",
      des: "Centipede Tour - Guided Arizona",
      desert: "Tour by ATV",
    },
    {
      id: 2,
      image: feature2,
      title: "New York, USA",
      des: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    },
    {
      id: 3,
      image: feature3,
      title: "London, UK",
      des: "Westminster Walking Tour & Westminster Abbey Entry"
    },
    {
      id: 4,
      image: feature4,
      title: "New York, USA",
      des: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area"
    },
  ];
    
  return (
    <section className='feature-sec'>
      <Container>
        <Row>
          <Col md='12'>
            <h2 className="feature-header">Featured Trips</h2> {/* Added header */}
            <Slider {...settings}>
              {featureList.map((feature) => (
                <Card key={feature.id} className="m-2">
                  <Card.Img 
                    variant='top'
                    src={feature.image}
                    className='img-fluid'
                    alt={feature.title}
                  />
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.des}</Card.Text>
                    {feature.desert && <Card.Text className="text-muted">{feature.desert}</Card.Text>}
                  </Card.Body>
                </Card>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Featured;
