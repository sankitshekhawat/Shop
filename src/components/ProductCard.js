import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ imgSrc, title, link,style }) => {
  return (
  
    <Card className='cardimg' style={{ width: '121px', height: '150px', margin: '16px', backgroundColor: 'rgb(240, 212, 235)',top:'-352px',borderRadius:'22px', ...style, margin: '16px' }}>
      <a href={link}>
        <Card.Img 
          variant="top" 
          src={imgSrc} 
          style={{ 
            height: '110px', 
            objectFit: 'cover', 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
            borderRadius: '4px', 
            width:'76px',
            position:'relative',
            top:'19px',
            left:'19px'
          }} 
        />
      </a>
      <Card.Body style={{ padding: '10px', textAlign: 'center' }}>
        <Card.Title style={{ fontSize: '12px', margin: '0',position:'relative', top:'29px' }}>{title}</Card.Title>
      </Card.Body>
    </Card>
    
  );
};
<h2 className='Heading'>Shop All</h2>

export default ProductCard;
