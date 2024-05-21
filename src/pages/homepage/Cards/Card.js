import React from 'react';
import './Card.css';

const Card = ({ index }) => {
  const style = {
    transform: `translateY(${index * 20}px)`, 
    left: '200px', 
  };

  return (
      <div className="filler-card" style={style}>
        <div className="filler-card-int"></div>
      </div>
    
  );
};

export default Card;

