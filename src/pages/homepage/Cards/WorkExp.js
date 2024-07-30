import React from 'react';

function WorkExp() {
    const Work_Exp = [ {
        id: 'Most Recent',
        Company: 'WSSC Water',
        Role: 'Data Networking Engineering and Cyber Security Intern',
        type: 'Internship',
      }
    
      ];

      return (
        <main>
          <div className='Most_Recent'>
            {Work_Exp.filter(card => card.type === 'Internship').map(card => (
              <div key={card.id}>
                <h4 className='Most_Recent-Int'>{card.Company}</h4>
                <h3 className='Most_Recent-Int'>{card.Role}</h3>
              </div>
            ))}
          </div>
        </main>
        );
}

export default WorkExp;