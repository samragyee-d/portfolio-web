//To-do list:
//DONE: //add a feature that will duplicate the filler cards --do @home
	//DONE: //organize them by column
	//DONE: //make them move slightly to the left every time
//DONE: add a popup when page is loaded that says "Samragyee Resume" or smth like that. Include a "Play" button.
//DONE: Route the "Resume" button of the pop-up to another resume page
//PRIORITY:
//Add the little piles for the lil sections
//Add a deck of cards that the user can draw from. Each card will have a bullet point of my resume
//Add places to put the four suits
//Once all four suits have been created, make a button that show resume
//OPTIONAL:
//include lil symbols on card (ex. "Education" would have books) similar to real playing cards. 
//make it playable.
//add a timer
//add a point system (idk how this would work yet)

//THINGS TO FIX: 6/9/2024:
//- Cards don't flip, fixed: typo!!!! *facepalm*

import React from 'react';
import './homepage.css';
import { useState, useEffect } from 'react';
import ReactCardFlip from "react-card-flip";
import Modal from './Modal';

function Homepage() {
	const [EdisFlipped, setEdIsFlipped] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function EdflipCover(){
		setEdIsFlipped(!EdisFlipped);
	};

	useEffect (() => {
		setIsModalOpen(true);
	}, []);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	
  return (
	
    <main>
		<ReactCardFlip flipDirection='vertical' isFlipped={EdisFlipped}>
			<div className ='main-card-front' onClick={EdflipCover}>
				<div className='main-card-front-int'><h3 className="Education">Education</h3></div>
				
			</div>
			<div className ='main-card-back' onClick={EdflipCover}>
				<div className="main-card-back-int"><h2>back</h2></div>
			</div>
		</ReactCardFlip>
		<Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default Homepage;