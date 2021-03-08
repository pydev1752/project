import React from 'react';
import { Player } from 'video-react';
import './Videos.css';
import video1 from './video1.mp4';
import video2 from './video10.mp4';
import video3 from './video13.mp4';
import video4 from './video14.mp4';
import video5 from './video16.mp4';
import video6 from './video17.mp4';
import video7 from './video18.mp4';
import video8 from './video19.mp4';
import video9 from './video2.mp4';
import video10 from './video27.mp4';
import video11 from './video28.mp4';
import video12 from './video29.mp4';
import video13 from './video3.mp4';
import video14 from './video30.mp4';
import video15 from './video31.mp4';
import video16 from './video32.mp4';
import video17 from './video5.mp4';
import video18 from './video6.mp4';
import video19 from './video8.mp4';
import video20 from './video9.mp4';

const Videos = ({ onRouteChange, popUp }) => {
	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<p className='tc f3 black pa3'>Vídeos</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'flex-start'}}>
				<p onClick={() => onRouteChange('albums')} className='tl f3 link underline dim pointer black pa3'>Back</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div onClick={() => popUp('mandou esse vídeo depois de umas duas semanas de conversa (eu acho) e já fiquei todo boiola')} className='videoa'>
					<Player>
		      			<source src={video1} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('cara, quando você morde os lábios...')} className='videob'>
					<Player>
		      			<source src={video2} />
		    		</Player>
	    		</div>
				<div className='videoc'>
					<Player>
		      			<source src={video3} />
		    		</Player>
	    		</div>
				<div className='videod'>
					<Player>
		      			<source src={video4} />
		    		</Player>
	    		</div>
			</div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div onClick={() => popUp('esses vídeos onde você tá animadinha são tudo pra mim')} className='videoe'>
					<Player>
		      			<source src={video5} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('kkkkkkkkkkkk esse vídeo é incrível, entenda que você nunca tá feia cara, queria um beijinho desses agora :(')} className='videof'>
					<Player>
		      			<source src={video6} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('SORRISO LINDO DO CACETE CARA')} className='videog'>
					<Player>
		      			<source src={video7} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('SORRISO LINDO²')} className='videoh'>
					<Player>
		      			<source src={video8} />
		    		</Player>
	    		</div>
			</div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div onClick={() => popUp('não existe um defeito nesse vídeo, você tá incrivelmente linda e a música além de ser ótima combinou demais com o vídeo')} className='videoi'>
					<Player>
		      			<source src={video9} />
		    		</Player>
	    		</div>
				<div className='videoj'>
					<Player>
		      			<source src={video10} />
		    		</Player>
	    		</div>
				<div className='videok'>
					<Player>
		      			<source src={video11} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('kkkkkkkkk mó tansa')} className='videol'>
					<Player>
		      			<source src={video12} />
		    		</Player>
	    		</div>
			</div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div onClick={() => popUp('essa linguinha é muito fofa')} className='video2'>
					<Player>
		      			<source src={video13} />
		    		</Player>
	    		</div>
				<div className='videom'>
					<Player>
		      			<source src={video14} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('PUTA QUE PARIU QUE SORRISO E BOCA LINDA, DAR UM BEIJÃO NA PRÓXIMA VEZ Q TE VER, tomara que não demore muito')} className='videon'>
					<Player>
		      			<source src={video15} />
		    		</Player>
	    		</div>
				<div className='videoo'>
					<Player>
		      			<source src={video16} />
		    		</Player>
	    		</div>
			</div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div onClick={() => popUp('quando eu menos esperava você entrou na minha vida e em pouquíssimo tempo me conquistou de um jeito maravilhoso')} className='videop'>
					<Player>
		      			<source src={video17} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('espero mesmo que dê muito certo entre nós, quero te fazer feliz :p')} className='videoq'>
					<Player>
		      			<source src={video18} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('por mais que eu elogie muito seu exterior, nada se compara a sua personalidade e alma. você é uma pessoa boa demais pra esse mundo e merece tudo que ainda resta de bom nele')} className='videor'>
					<Player>
		      			<source src={video19} />
		    		</Player>
	    		</div>
				<div onClick={() => popUp('obrigado por compartilhar o seu dia a dia comigo, você é incrível.')} className='videos'>
					<Player>
		      			<source src={video20} />
		    		</Player>
	    		</div>
			</div>
		</div>
	)
}

export default Videos;