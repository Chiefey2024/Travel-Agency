import React from 'react'
import './Home.css'
import Cover from '../Components/Cover/Cover'
import Search from '../Components/Search/Search'
import Featured from '../Components/Featured/Featured'
import OurMission from '../Components/OurMission/ourMission'
import Services from '../Components/Services/services'
import Bookings from '../Components/Bookings/bookings'
import Map from '../Components/Map/map'
import Testimonial from '../Components/Testimonial/testimoninal'
import TopDestinations from '../Components/TopDestinations/topDestinations'

const Home = () => {
  return (
    <>
    <Cover />
    <Search />
    <Featured />
    <OurMission />
    <Services />
    <Bookings />
    <Map />
    <Testimonial />
    <TopDestinations />
    </>
  )
}

export default Home
