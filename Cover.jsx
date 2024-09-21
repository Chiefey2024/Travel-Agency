import React from 'react'
import './Cover.css'
import { Carousel } from 'react-bootstrap';

import pic1 from '/Users/HP/travel/src/Assets/images/first.png'
import pic2 from '/Users/HP/travel/src/Assets/images/france.jpg'
import pic3 from '/Users/HP/travel/src/Assets/images/map.png'

const Cover = () => {
  return (
   <>
   <section className='slider'>
   <Carousel>
      <Carousel.Item>
        <img src={pic1} className='d-block w-100' alt ="First slide" />
        <Carousel.Caption>
         <div className='advert-hub'> <h1>Life is an Adventure <br /> Embrace it Fully!</h1>
          <p className='advert'>Uncover Amazing Destinations at Exclusive Rates. Dine, Shop, <br /> and Explore Facinating Spots Around the Globe.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
   </section>

   </>
  )
}

export default Cover
