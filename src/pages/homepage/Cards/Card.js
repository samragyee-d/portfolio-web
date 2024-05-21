import React from 'react';
import './Card.css'; // Ensure correct path to CSS

const Card = ({ index }) => {
  const style = {
    transform: `translateY(${index * 20}px)`, // Move down by 200px for each card
    left: '200px', // Constant X-position
  };

  return (
      <div className="filler-card" style={style}>
        <div className="filler-card-int"></div>
      </div>
    
  );
};

export default Card;

