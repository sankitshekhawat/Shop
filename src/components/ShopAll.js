import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShopAll = ({ imgSrc, title, rating, price, style}) => {
  return (
    <div className='Shopall'>
    <Card className='ShopCard' style={{ ...style,  position:'relative',left:'-4px',top:'-323px', width: '200px', height: '350px', margin: '10px', backgroundColor: 'rgb(240, 212, 235)', borderRadius:'17px 23px 12px 12px',
 }}>
      <Card.Img variant="top" src={imgSrc} style={{ height: '150px', width:'110px', objectFit: 'cover', borderRadius:'12px', position:'relative', top: '19px',left:'44px'}} />
      <Card.Body style={{ padding: '10px', textAlign: 'center' }}>
        <Card.Title style={{ fontSize: '14px', margin: '10px 0' }}>{title}</Card.Title>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontSize: '14px', color: 'gold' }}>{"★".repeat(rating)}</span>
          <span style={{ fontSize: '14px', color: 'gray' }}>{"★".repeat(5 - rating)}</span>
        </div>
        <Card.Text style={{ fontSize: '16px', margin: '10px 0' }}>${price}</Card.Text>
        <Button variant="primary" style={{backgroundColor: 'orange', border:'orange', width:"180px"}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ShopAll;
