import React from 'react';
import './Out.css';
import { Player } from 'video-react';
import img1 from './foto10.jpeg';
import img2 from './foto12.jpeg';
import img3 from './foto13.jpeg';
import img4 from './foto17.jpeg';
import img5 from './foto2.jpeg';
import img6 from './foto20.jpeg';
import img7 from './foto21.jpeg';
import img8 from './foto22.jpeg';
import img9 from './foto23.jpeg';
import img10 from './foto24.jpeg';
import img11 from './foto25.jpeg';
import img12 from './foto27.jpeg';
import img13 from './foto28.jpeg';
import img14 from './foto29.jpeg';
import img15 from './foto3.jpeg';
import img16 from './foto32.jpeg';
import img17 from './foto4.jpeg';
import img18 from './foto6.jpeg';
import img19 from './pe1.jpeg';
import img20 from './foto18.jpeg';
import video1 from './video15.mp4';
import video2 from './video20.mp4';
import video3 from './video21.mp4';
import video4 from './video23.mp4';
import video5 from './video24.mp4';
import video6 from './video25.mp4';
import video7 from './video26.mp4';
import video8 from './video4.mp4';

const Out = ({ onRouteChange, popUp }) => {
	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<p className='tc f3 black pa3'>Out Of Context Vitória</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'flex-start'}}>
				<p onClick={() => onRouteChange('albums')} className='tl f3 link underline dim pointer black pa3'>Back</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<img onClick={() => popUp('de onde achas que está feia nessa foto? tá a coisa mais fofa')} className='imgaaa' alt='' src={img16}/>
				<img className='imgbbb' alt='' src={img2}/>
				<img onClick={() => popUp('jabuticaba')} className='imgccc' alt='' src={img12}/>
			</div>
			<p></p>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<img onClick={() => popUp('gata, linda, sorrisão, beautiful, wonderful, 精彩的')} className='imgaa' alt='' src={img1}/>
				<img className='imgbb' alt='' src={img15}/>
				<img onClick={() => popUp('devolve meu coração bobona')} className='imgdd' alt='' src={img4}/>
				<img onClick={() => popUp('jabuticaba gata')} className='imgee' alt='' src={img5}/>
			</div>
			<p></p>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<img className='imgff' alt='' src={img6}/>
				<img onClick={() => popUp('quero saber quando vou te ver de óculos')} className='imggg' alt='' src={img7}/>
				<img onClick={() => popUp('queria estar no meio desse coração :p')} className='imghh' alt='' src={img8}/>
				<img onClick={() => popUp('gostosa')} className='imgii' alt='' src={img9}/>
				<img onClick={() => popUp('tem que ser muita tansa pra perder o brinco no sofá mesmo')} className='imgjj' alt='' src={img10}/>
			</div>
			<p></p>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<img onClick={() => popUp('fiquei felizão com a sua reação')} className='imgkk' alt='' src={img11}/>
				<img onClick={() => popUp('para de me seduzir vadia')} className='imgmm' alt='' src={img13}/>
				<img onClick={() => popUp('quarto mais gamer que o meu')} className='imgnn' alt='' src={img14}/>
				<img onClick={() => popUp('vitória aventureira')} className='imgoo' alt='' src={img3}/>
			</div>
			<p></p>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<img onClick={() => popUp('toda drogada')} className='imgqq' alt='' src={img17}/>
				<img onClick={() => popUp('linda')} className='imgrr' alt='' src={img18}/>
				<img onClick={() => popUp('pega no pézão kkkkkkkk')} className='imgss' alt='' src={img19}/>
				<img onClick={() => popUp('parece que tá fugindo do FBI')} className='imgtt' alt='' src={img20}/>
			</div>
			<p></p>
			<div>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<div onClick={() => popUp('kkkkkkkkkkkkkkkkk eu adoro a cara que você faz no final')} className='video2'>
						<Player>
		      				<source src={video1} />
		    			</Player>
	    			</div>
	    			<div onClick={() => popUp('gostosa demais rs')} className='video3'>
		    			<Player >
		      				<source src={video2} />
		    			</Player>
	    			</div>
	    			<div onClick={() => popUp('kkkkkkkk sua carinha no final')} className='video4'>
		    			<Player>
		      				<source src={video3} />
		    			</Player>
	    			</div>
	    			<div onClick={() => popUp('a qualidade desse vídeo e o quão você é bonita me impressiona')} className='video5'>
		    			<Player>
		      				<source src={video4} />
		    			</Player>
	    			</div>
	    		</div>
    			<div style={{display: 'flex', justifyContent: 'center'}}>
	    			<div onClick={() => popUp('kkkkkkkk queria estar na caminha com você :c')} className='video6'>
		    			<Player>
		      				<source src={video5} />
		    			</Player>
	    			</div>
	    			<div onClick={() => popUp('muito tiktoker né cara, e ainda por cima fica me seduzindo')} className='video7'>
		    			<Player>
		      				<source src={video6} />
		    			</Player>
	    			</div>
	    			<div onClick={() => popUp('pescoço lindo cara, pra ficar mais lindo só ...')} className='video8'>
		    			<Player>
		      				<source src={video7} />
		    			</Player>
	    			</div>
	    			<div onClick={() => popUp('kkkkkkkkkk usa voz falando com a amora é muito fofa')} className='video9'>
		    			<Player>
		      				<source src={video8} />
		    			</Player>
	    			</div>
	    		</div>
			</div>
		</div>
	)
}

export default Out;