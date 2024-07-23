import React from 'react';
import './Card.css';

const EducationCards = [ {
  id: 'UMD-Card',
  name: 'University of Maryland-College Park',
  description: "B.S Computer Engineering, ACES (cybersecuirty) honors college ",
}, 
{
  id: 'Edison-Card',
  name: 'Thomas Edision High School of Technology',
  description: 'Network Operations, Cybersecuirty Capstone',
}
 
]

EducationCards.forEach(id => console.log(id))


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

