import React, { useState }from 'react'
import DatePicker from "react-datepicker";
import './Search.css'
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from '../DropdownFolder/Dropdown'

const Search = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectedLocation =(value)=>{
      console.log("Location", value)
  }

  const selectedGuest =(value)=>{
    console.log("Guest", value)
  }


  return (
    <>
      <section className='box-search-adv'>
        <Container>
          <Row>
            <Col md={12} xs ={12}>
            <div className="box-search">
                <div className="item-search">
                  <Dropdown 
                  label="Location"
                  options={
                    ["USA, Turkey",
                     "Tokyo Japan",
                      "Sydney Australia",
                       "Melbourne Auatralia",
                        "Paris France"]
                  }
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className='item-search-label'> Check in</label>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                  selectedStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd, MMMM, yyyy"
                  />
                  
                  </div>
                  <div className="item-search item-search-2">
                  <label className='item-search-label'> Check out</label>
                  <DatePicker selected={endDate} onChange={(date) => setStartDate(date)}
                  selectedEnd
                  startDate={endDate}
                  endDate={startDate}
                  dateFormat="dd, MMMM, yyyy"

                  />
                  
                  </div>
                  <div className="item-search bd-none">
                  <Dropdown 
                  label="Guest"

                  options={
                    [
                      "2 Adults, 1 Child",
                      "2 Adults, 2 Children",
                      "2 Adults, 3 Children",
                    ]
                  }
                  />
                  
                  </div>
                  <div className="item-search bd-none">
                    <button className='primaryBtn'><i ></i>Search</button>
                  </div>
            </div>

            </Col>


          </Row>


        </Container>


      </section>

    </>
  )
}

export default Search
