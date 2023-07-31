import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaCamera, FaTencentWeibo, FaUserAlt, FaHome, FaNetworkWired, FaNewspaper, FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";



const TopNav = () => {


    return (
        <>
           {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand col-md-2" href="#">Navbar</a>
                   
                    <form className="col-md-5">
                        <div className="input-group custom-formgrp">
                            <select className="form-select custom-formgrp" id="inputGroupSelect04" >
                                <option selected>Product</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <input type="text" class="form-control" placeholder="Tell Us what you are looking for"></input>
                            <div class="upload-btn-wrapper">
                                <div class="btn-custm"><FaCamera /></div>
                                <input type="file" name="myfile" />
                            </div>
                            <button className="btn btn-outline-secondary custom-formgrp" type="button">Button</button>
                        </div>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-md-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <div><FaTencentWeibo /></div> Post My RFQ
                                </a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link custm-signin" href="#"><div><FaUserAlt /></div> Sign In / Join</a>
                                <div class="dropdown-menu custom-dropdown">
                                    <form class="px-4 py-3">
                                        <div class="form-group">
                                            <label for="exampleDropdownFormEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleDropdownFormPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                                            <label class="form-check-label" for="dropdownCheck">
                                                Remember me
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Sign in</button>
                                    </form>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">New around here? Sign up</a>
                                    <a class="dropdown-item" href="#">Forgot password?</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div><FaUserAlt /></div>  Message
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" tabindex="-1" aria-disabled="true"> <div><FaUserAlt /></div> Inquiry basket</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>   */}
            <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Social Web</Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto custome-space">
              <Link to="/home"><FaHome /></Link>
              <Nav.Link href="#link"><FaNetworkWired /></Nav.Link>
              <Nav.Link href="#home"> <FaNewspaper /></Nav.Link>
              <Nav.Link href="#link"><FaBell /></Nav.Link>
             
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        </>
    )
}
export default TopNav