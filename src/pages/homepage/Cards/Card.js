import React from 'react';
import './Card.css';

const Card = ({ index, xPosition }) => {
  const style = {
    transform: `translate(${xPosition}px, ${index * 30}px)`, 
  };

  return (
      <div className="filler-card" style={style}>
        <div className="filler-card-int"></div>
      </div>
    
  );
};

export default Card;

