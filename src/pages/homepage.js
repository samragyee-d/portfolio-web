import React from 'react';
import './homepage.css';

function homepage() {
  return (
    <main>
	<div class="book">
		<div class="book-cover">
			<div>
				<h1>Samragyee Dhakal</h1>
				<h2>Welcome to my personal website!</h2>
			</div>
		</div>
    </div>
	<div class="interior">
		<div class ="interior-cover">
			<ul className='text'>
				<li>Education</li>
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