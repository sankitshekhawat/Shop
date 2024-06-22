import React from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS


const VerticalNavbarComponent3=({})=>{
    return(
        <div>
           <img src='images/Originlogo.jpeg' className='VerImg' width='200px'height='123px'/>
           <p className='Vertical3'>We at Origin Nutrition promise to offer you the best tasting, 100% natural vegan protein that is plant-based and ideal for weight management as well as improving protein intake.</p>
           <i className="btn btn-link bi bi-instagram "></i> 
           <i className="btn btn-link bi bi-facebook "></i>    
   
               </div>
    )
};
export default VerticalNavbarComponent3;
