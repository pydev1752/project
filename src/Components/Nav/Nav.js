import React from 'react';
import './Nav.css';
import Tilt from 'react-tilt';
import img from './foto14.jpeg';

const Nav = ({ onRouteChange, popUp }) => {
	return (
		<nav>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<p onClick={() => onRouteChange('albums')} className='tc f3 link dim underline pointer black pa3'>Welcome to Vick's gallery</p>
			</div>
			<Tilt className="Tilt" options={{ max : 25 }}>
 				<div onClick={() => popUp('obrigado por esse tipo de meme, sério')} className="Tilt-inner"><img className='img' alt='homeimage' src={img}/></div>
			</Tilt>
			<p className='tc f3 black pa3'>Made with love by João</p>
		</nav>
	)
}

export default Nav;