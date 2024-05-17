import React from 'react';
import './homepage.css';
import { useState, useEffect } from 'react';
import ReactCardFlip from "react-card-flip";

function Homepage() {

//add a feature that will duplicate the filler cards
//add a popup when page is loaded that says "Samragyee Resume" or smth like that. Include a "Play" button.
//add a deck of cards that the user can draw from. Each card will have a fun fact or smth. 
//add a page for every section of resume (card text is link)
//include lil symbols on card (ex. "Education" would have books) similar to real playing cards. 
//optional: add a point system (idk how this would work yet)

	const [isFlipped, setIsFlipped] = useState(false);

	function flipCover(){
		setIsFlipped(!isFlipped);
	};
  return (
    <main className="board">
		<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
			<div className ='book-cover-front' onClick={flipCover}>
				<div>
					<h2>Education</h2>
					<h2></h2>
				</div>
			</div>
			<div className ='book-cover-back' onClick={flipCover}>
				<h2>back</h2>
			</div>
		</ReactCardFlip>
		<div className="filler-card">
			<div className="filler-card-int">
			</div>
		</div>
    </main>
  );
}

export default Homepage;