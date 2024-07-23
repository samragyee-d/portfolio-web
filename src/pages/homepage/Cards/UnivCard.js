import React from 'react';
import './UnivCard.css';


function UnivCard() {
  const EducationCards = [ {
    id: 'UMD-Card',
    Univname: 'University of Maryland-College Park',
    description: "B.S Computer Engineering, ACES (cybersecuirty) honors college ",
  }, 
  {
    id: 'Edison-Card',
    HSname: 'Thomas Edision High School of Technology',
    description: 'Network Operations, Cybersecuirty Capstone',
  }
   
  ];

  return (
    <div className="Univ-Card">
      {EducationCards.map(card => (
        <div key={card.id}>
          <h4 className="Univ-Card-Int">{card.Univname}</h4>
        </div>
      ))}

      <div className='HS-Card'>
      {EducationCards.map(card => (
        <div key={card.id}>
          <h4 className="HS-Card-Int">{card.HSname}</h4>
        </div>
      ))}
      </div>
      

    </div>
  )
}

export default UnivCard;