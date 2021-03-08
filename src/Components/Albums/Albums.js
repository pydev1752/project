import React from 'react';
import './Albums.css';
import Tilt from 'react-tilt';
import { Player } from 'video-react';
import img1 from './rs.png';
import img2 from './nariz11.jpeg';
import img3 from './foto31.jpeg';
import video1 from './video11.mp4';

const Albums = ({ onRouteChange }) => {
	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<p className='tc f3 black pa3'>Albums</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'flex-start'}}>
				<p onClick={() => onRouteChange('home')} className='tl f3 link underline dim pointer black pa3'>Back</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
				<div>
					<p1 className='f3 link dim pointer black pa3'>Como você consegue ser tão linda?</p1>
					<div>
						<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 							<div onClick={() => onRouteChange('beautiful')} className="Tilt-inner"><img className='img1a' alt='dasd' src={img1}/></div>
						</Tilt>
					</div>
				</div>
				<div>
					<p1 className='f3 link dim pointer black pa3'>Rinoplastia tem inveja do seu nariz</p1>
					<div>
						<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 							<div onClick={() => onRouteChange('nose')} className="Tilt-inner"><img className='img2b' alt='qwe' src={img2}/></div>
						</Tilt>
					</div>
				</div>
				<div>
					<p1 className='f3 link dim pointer black pa3'>Out of context vitória</p1>
					<div>
						<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 							<div onClick={() => onRouteChange('out')} className="Tilt-inner"><img className='img3c' alt='' src={img3}/></div>
						</Tilt>
					</div>
				</div>
				<div>
					<p1 onClick={() => onRouteChange('videos')} className='f3 link dim underline pointer black pa3'>Vídeos</p1>
					<div className='video1'>
						<Player>
     						<source src={video1} />
    					</Player>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Albums;