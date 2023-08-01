import React, { useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown, Button, InputGroup, Form, Container, Dropdown, DropdownButton } from 'react-bootstrap';
const Navigation = () => {
    const [disp,setdisp]=useState("none");
    const [showPopUp,setPopUp]=useState({
      rfq:false,
      sign:false,
      message:false
    });
  return (
    <div>
      <nav className='navbar pb-0 pt-0' style={{backgroundImage:".../images/"}}>
      <Navbar expand="lg" className='bgwht'>
            <Container fluid>
              
              <Navbar.Brand href="#home">MADE IN CHINA</Navbar.Brand>
             
              <InputGroup className='search-container'>
              <Form.Select aria-label="Default select example">
                <option>Choose </option>
                <option value="Supplier">Supplier </option>
                <option value="Product">Product</option>
                
              </Form.Select>
                <Form.Control aria-label="Text input with 2 dropdown buttons" placeholder='tell us what are you are looking for...' />
                <div class="upload-btn-wrapper">
                  <div class="btn-custm"><FaCamera /></div>
                  <input type="file" name="myfile" />
                </div>
                <Button variant="link" className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></Button>
                
              </InputGroup>
             
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                <Nav className="custome-space justify-content-end">
                  <Link 
                  to="/home" 
                  className='nav-link'
                  onMouseEnter={()=>setPopUp(()=>
                    {return {rfq:true,sign:false,message:false};})} 
                    onMouseLeave={()=>setPopUp(false,false,false)}
                  > <i class="fa-solid fa-bullseye" style={{ display: "block" }}></i> Post my rfq 
                    {showPopUp.rfq?
                       <div className='sub-menu'>tell us what you need and try the easy way to get the quotes</div>:<></>
                    }
                  
                  </Link>
                  <Nav.Link 
                  href="#link"
                  onMouseEnter={()=>setPopUp(()=>
                    {return {rfq:false,sign:true,message:false};})} 
                    onMouseLeave={()=>setPopUp(false,false,false)}
                  > <i class="fa-regular fa-user" style={{ display: "block" }}></i> Sign in/join 
                  
                  {showPopUp.sign?
                  <div className='sub-menu justify-content-start'>
                  <div className='d-block'>
                  <div className='option-box'>
                    <div><button className='red-btn'>sign in</button></div>
                    <div><button className='red-border'>join free</button></div>
                  </div>
                  <Nav.Link href="#">message</Nav.Link>
                  <Nav.Link href="#">quotes</Nav.Link>
                  <Nav.Link href="#">orders</Nav.Link>
                  <Nav.Link href="#">favourites</Nav.Link>
                  <Nav.Link href="#">browsing history</Nav.Link>
                  
                  </div>
                  </div>:<></>}
                  </Nav.Link>
                  <Nav.Link 
                  href="#home"
                  onMouseEnter={()=>setPopUp(()=>{return {rfq:false,sign:false,message:true};})} 
                onMouseLeave={()=>setPopUp(false,false,false)}
                  > <i class="fa-solid fa-message" style={{ display: "block" }}></i> Messages 
                  {showPopUp.message?<div className='sub-menu'>
                  <span>sign in to view the messages</span>
                  <div className='option-box'>
                  <div><button className='red-btn'>sign in</button></div>
                  <div><button className='red-border'>join free</button></div>
                  </div>
                </div>:<></>}
                  
                  </Nav.Link>
                  <Nav.Link href="#home"> <i class="fa-solid fa-cart-shopping" style={{ display: "block" }}></i> Inquiry basket </Nav.Link>


                 
                </Nav>
              </Navbar.Collapse>
              
            </Container>
          </Navbar>
      </nav>
      <div className='mobile-menu' style={{display:disp}}>
        <div className='mobile-nav-icons'>
            <ul>
                <li onClick={()=>setdisp("none")}><span>post my rfq</span></li>
                <li onClick={()=>setdisp("none")}><span>sign in/join</span></li>
                <li onClick={()=>setdisp("none")}><span>messages</span></li>
                <li onClick={()=>setdisp("none")}><span>enquiry basket</span></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation
