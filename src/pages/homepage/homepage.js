import React from 'react';
import './homepage.css';
import { Link } from "react-router-dom";

function homepage() {
	const links = () => console.log("Mwaahahah")
  return (
    <main>
	<div className ="book">
		<div className ="book-cover" >
			<div>
				<h1>Samragyee Dhakal</h1>
				<h2>Welcome to my personal website!</h2>
			</div>
		</div>
    </div>
	<div className ="interior">
		<div className ="interior-cover">
			<ul className='text'>
				<h2>Table of Contents</h2>
				<li><Link onClick={links}>Education</Link></li>
				<li>Skills</li>
				<li>Expierence</li>
				<li>Projects</li>
				<li>Honors and Awards</li>
				<li>Misc</li>
			</ul>
		</div>
	</div>
    </main>
  );
}

export default homepage;