import React, { useEffect, useState } from 'react'
import './Header.css'
import { Container, Row,Navbar,Offcanvas,Nav,NavDropdown,Form,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo from '/Users/HP/travel/src/Assets/images/main-logo.png'

 const Header = () => {

    const [open , setOpen] = useState(false);

  const toggleMenu=()=>{
      setOpen(!open)
  };

    useEffect(()=>{
      window.addEventListener("scroll", isSticky);
      return ()=>{
        window.removeEventListener("scroll", isSticky);
      }
    })

     const isSticky=(e)=>{
        const header = document.querySelector('.header-sec');
        const scrollTop = window.scrollY;
        scrollTop >=120 ? header.classList.add('is-Sticky') :
        header.classList.remove('is-Sticky')
     }

  return (
    

      <header className='header-sec'>
        <Container>
         
          <Navbar expand= 'lg'
          className=" p-0">
          
          <Navbar.Brand href="#">
           <NavLink to='/'> <img src={Logo}/></NavLink>

            </Navbar.Brand>

          {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} /> */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`} 
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            <Offcanvas.Header>
              {/* <h1 className='logo'> <img src={Logo} alt="" /></h1> */}
              <span className='navbar-toggle'  onClick={toggleMenu}>
              <i class="bi bi-x-lg"></i>

              </span>
             
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink  className='nav-link' to='/'>HOME</NavLink>
                <NavLink  className='nav-link' to='/'>BOOKINGS</NavLink>
                <NavLink  className='nav-link' to='/'>DESTINATION</NavLink>
                <NavLink  className='nav-link' to='/'>TESTIMONIAL</NavLink>
                <NavLink  className='nav-link' to='/'>GALLERY</NavLink>
                <NavDropdown
                  title="En"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">Italy Tours</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Spain Tours</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">France Tours</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">More..</NavDropdown.Item>

                </NavDropdown>
                <NavLink className='nav-link' to='/'>About Us</NavLink>
                <NavLink className='nav-link' to='/'>Contact Us</NavLink>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className='ms-md-4 ms-2'>
            <NavLink className='primaryBtn d-none d-sm-inline-block'>
              SIGN UP
            </NavLink>
            <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
            <i className={open? "bi bi-x-lg" : "bi bi-list"}   onClick={toggleMenu}></i>
            </li>


          </div>

        </Navbar>

        

        </Container>


      </header> 
   
  )
}

export default Header
