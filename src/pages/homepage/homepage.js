import React from 'react';
import './homepage.css';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

function Homepage() {
	const [isFlipped, setIsFlipped] = useState(false);
	
	function flipCover(){
		setIsFlipped(!isFlipped);
	};
  return (
    <main>
		<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
			<div className ='book-cover-front' onClick={flipCover}>
				<div>
					<h1>Samragyee Dhakal</h1>
					<h2>Welcome to my personal website!</h2>
				</div>
			</div>
			<div className ='book-cover-back' onClick={flipCover}>
				<h1>back</h1>
			</div>
		</ReactCardFlip>
		<div className ="interior-cover">
			<ul className='text'>
				<h2>Table of Contents</h2>
				<li></li>
				<li>Skills</li>
				<li>Expierence</li>
				<li>Projects</li>
				<li>Honors and Awards</li>
				<li>Misc</li>
			</ul>
		</div>
    </main>
  );
}

export default Homepage;