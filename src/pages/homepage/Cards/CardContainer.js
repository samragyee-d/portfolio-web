import React from 'react';
import Card from './Card'; 
import './CardContainer.css'; 

//Changes to the number of piles can be made here:
const CardContainer = () => {
  const numberOfCards = 2;
  const numberOfCards2 = 3;
  const numberofCards3 = 4;
  const numberofCards4 = 5;
  const cardsArray = Array.from({ length: numberOfCards });
  const cardsArray2 = Array.from ({ length: numberOfCards2 });
  const cardsArray3 = Array.from ( { length: numberofCards3});
  const cardsArray4 = Array.from ( { length: numberofCards4});
  
//Move all the cards at once
  const xPosition1 = 400;
  const xPosition2 = xPosition1 + numberOfCards + 150;
  const xPosition3 = xPosition2 + numberOfCards2 + 150;
  const xPosition4 = xPosition3 + numberofCards3 + 150;

  return (
      <div className="card-container">
      {cardsArray.map((_, index) => (
        <Card key={index} index={index} xPosition={xPosition1} /> 
      ))}
      {cardsArray2.map((_, index) => (
        <Card key={numberOfCards + index} index={index} xPosition={xPosition2} />
      ))}
      {cardsArray3.map((_, index) => (
        <Card key={numberOfCards2 + index} index={index} xPosition={xPosition3} /> 
      ))}
      {cardsArray4.map((_, index) => (
        <Card key={numberofCards3 + index} index={index} xPosition={xPosition4} /> 
      ))}
    </div>

  );
};

export default CardContainer;