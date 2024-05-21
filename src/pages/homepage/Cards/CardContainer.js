import React from 'react';
import Card from './Card'; 
import './CardContainer.css'; 

const CardContainer = () => {
  const numberOfCards = 2;
  const cardsArray = Array.from({ length: numberOfCards });

  return (
    <div className="card-container">
      {cardsArray.map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </div>
  );
};

export default CardContainer;
