import React from 'react';
import './EducationDeck.css';

function EducationDeck() {
//Putting all cards here could cause problems when implementing JavaScript logic, however, we can fix that....right?
  const EducationCards = [ {
    id: 'UMD-Card',
    Univname: 'University of Maryland-College Park',
    description: "B.S Computer Engineering, ACES (cybersecuirty) honors college",
    type: "university",
  }, 
  {
    id: 'Edison-Card',
    HSname: 'Thomas Edision High School of Technology',
    description: 'Network Operations, Cybersecuirty Capstone',
    type: "highschool",
  },

  {
    id: 'Northwood High School-Card',
    HSname2: 'Northwood High School',
    description: '4.71 GPA, Top 5% of Class',
    type: "highschool2",
  }

  ];

  return (
  <main>
    <div className='Univ-Card'>
      {EducationCards.filter(card => card.type === 'university').map(card => (
        <div key={card.id}>
          <h4 className='Univ-Card-Int'>{card.Univname}</h4>
        </div>
      ))}
    </div>

    <div className='HS-Card'>
      {EducationCards.filter(card => card.type === 'highschool').map(card => (
        <div key={card.id}>
          <h4 className='HS-Card-Int'>{card.HSname}</h4>
        </div>
      ))}
    </div>
    <div className="HS-Card2">
      {EducationCards.filter(card => card.type === 'highschool2').map(card => (
          <div key={card.id}>
            <h4 className='HS-Card-Int2'>{card.HSname2}</h4>
          </div>
      ))}
    </div>
  </main>
  );
};

export default EducationDeck;