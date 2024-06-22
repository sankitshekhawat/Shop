import React from 'react';
import './style.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavbarComponent = ({style}) => {
  return (
   <div>
    <Navbar id='Navbar' expand="lg" fixed="top" style={{ ...style, position: 'fixed', top: 0, zIndex: 1000 }}>
      <Navbar.Brand href="#home" className='Originsymbol'><span style={{fontSize:'33px', margin:'0px', padding:"0px"}}>Origin</span><span style={{fontSize:'13px', margin:'0px', padding:"0px"}}><br/>Nutrition</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Shop</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#recipes">Recipes</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search products" className="mr-sm-2" />
          <Button variant="outline-success" id='search'>Search</Button>
        </Form>
      </Navbar.Collapse>      
    </Navbar>
    <i className="btn btn-link bi bi-instagram" id='iconn'>Instagram</i> 

    <img src='images/originAside.jpeg' className='Navimg'></img>
    </div> 
  );
};

export default NavbarComponent;
