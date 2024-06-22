import React from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS


const VerticalNavbarComponent = ({ style }) => {
  return (
    <div style={{ }}>
      <Nav className="flex-column ">
        <Nav.Link href="#section1" className='Navlink' >Shop All</Nav.Link>
        <Nav.Link href="#section2" className='Navlink'>Why Origin</Nav.Link>
        <Nav.Link href="#section3" className='Navlink' >Recipes</Nav.Link>
        <Nav.Link href="#section4" className='Navlink' >Learn More</Nav.Link>
        <Nav.Link href="#section5" className='Navlink' >Stories</Nav.Link>
        <Nav.Link href="#section5" className='Navlink' >Protein Calculator</Nav.Link>
        <Nav.Link href="#section5" className='Navlink' >Contact us / FAQs</Nav.Link>
        <Nav.Link href="#section5"className='Navlink'  >Shipping & Delivery</Nav.Link>
        <Nav.Link href="#section5"className='Navlink' >Stores</Nav.Link>
       <div className='icons'>
        <h4 style={{position:'relative', top:'-202px', color:'chocolate'}}>We are available on</h4>
        <i className="btn btn-link bi bi-instagram" id='icon'>&nbsp; Instagram</i> 
        <i className="btn btn-link bi bi-amazon" id='icon'>&nbsp; Amazon</i> 
      



        </div>

      </Nav>
    </div>
  );
};

export default VerticalNavbarComponent;
