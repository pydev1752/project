import React from 'react';
import './Beautiful.css';
import img1 from './foto1.jpeg';
import img2 from './foto11.jpeg';
import img4 from './foto16.jpeg';
import img5 from './foto19.jpeg';
import img7 from './foto5.jpeg';
import img8 from './foto7.jpeg';
import img9 from './foto8.jpeg';
import img10 from './foto9.jpeg';
import img11 from './he.png';
import img12 from './hm.png';

const Beautiful = ({ onRouteChange, popUp }) => {
	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<p className='tc f3 black pa3'>Como Você Consegue Ser Tão Linda?</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'flex-start'}}>
				<p onClick={() => onRouteChange('albums')} className='tl f3 link underline dim pointer black pa3'>Back</p>
			</div>
			<div>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img onClick={() => popUp('creio eu que foi com essa foto que você começou a mexer comigo')} className='img1' alt='' src={img1}/>
					<img onClick={() => popUp('gostosa')} className='img7' alt='' src={img7}/>
					<img onClick={() => popUp('EU NUNCA NA MINHA VIDA VI UMA BOCA TÃO LINDA COMO A SUA')} className='img4' alt='' src={img4}/>
				</div>
				<p></p>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img onClick={() => popUp('bitch at the beach')} className='img5' alt='' src={img5}/>
					<img onClick={() => popUp('nossa, esse foi o melhor dia do ano até agora, tudo foi perfeito, você é perfeita')} className='img2' alt='' src={img2}/>
					<img onClick={() => popUp('da uma olhada nesse rosto, essa boca, esses olhos de jabuticaba, essa sobrancelha, esse pescoço, essas bochechas, esse nariz cara, tu fez rinoplastia não é possível')} className='img8' alt='' src={img8}/>
				</div>
				<p></p>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img onClick={() => popUp('pprt, eu amo esse sorriso, TODA vez que eu vejo esse sorrisão eu fico todo boiola')} className='img9' alt='' src={img9}/>
					<img onClick={() => popUp('radiante independente do ângulo')} className='img10' alt='' src={img10}/>
					<img onClick={() => popUp('me beija, por favor')} className='img11' alt='' src={img11}/>
					<img onClick={() => popUp('essa é a minha foto preferida, amarelo combina demais com você')} className='img12' alt='' src={img12}/>
				</div>
			</div>
		</div>
	)
}

export default Beautiful;