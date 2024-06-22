import React from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';

const VerticalNavbarComponent2=({})=>{
    return(
        <div>
            <h2 className='Vertical2'>Get Updates</h2>
           <form className='form-controls'> 
            <h4>Email</h4>
            <input type='Email' className='VerInput' required/><br/>
            <button className='btn btn-warning' style={{backgroundColor:'brown'}}>Submit</button>
            </form>
        </div>
    )
};
export default VerticalNavbarComponent2;
