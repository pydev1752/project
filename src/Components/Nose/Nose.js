import React from 'react';
import './Nose.css';
import img1 from './nariz1.jpeg';
import img2 from './nariz12.jpeg';
import img3 from './nariz13.jpeg';
import img4 from './nariz14.jpeg';
import img5 from './nariz15.jpeg';
import img6 from './nariz16.jpeg';
import img7 from './nariz17.jpeg';
import img8 from './nariz18.jpeg';
import img9 from './nariz19.jpeg';
import img10 from './nariz10.jpeg';
import img11 from './nariz2.jpeg';
import img12 from './nariz3.jpeg';
import img13 from './nariz4.jpeg';
import img14 from './nariz5.jpeg';
import img15 from './nariz6.jpeg';
import img16 from './nariz7.jpeg';
import img17 from './nariz8.jpeg';
import img18 from './nariz9.jpeg';

const Nose = ({ onRouteChange, popUp }) => {
	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<p className='tc f3 black pa3'>Rinoplastia Tem Inveja Do Seu Nariz</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'flex-start'}}>
				<p onClick={() => onRouteChange('albums')} className='tl f3 link underline dim pointer black pa3'>Back</p>
			</div>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
					<img onClick={() => popUp('obrigado por mandar esse tipo de foto, nunca pare com esse hábito')} className='imga' alt='' src={img7}/>
					<img onClick={() => popUp('hmm danone totoso')} className='imgb' alt='' src={img15}/>
					<img onClick={() => popUp('oia os zóio de jabuticaba')} className='imgc' alt='' src={img3}/>
					<img onClick={() => popUp('saudade de beijar essa boca')} className='imgk' alt='' src={img8}/>
					<img onClick={() => popUp('parece o trump de tão laranja')} className='imgl' alt='' src={img10}/>
					<img className='imgm' alt='' src={img18}/>
			</div>
			<p></p>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
				<img onClick={() => popUp('essa foto é muito fofinha')} className='imgd' alt='' src={img4}/>
				<img className='imge' alt='' src={img5}/>
				<img onClick={() => popUp('o neném na toalha')} className='imgf' alt='' src={img6}/>
				<img className='imgn' alt='' src={img14}/>
				<img className='imgo' alt='' src={img2}/>
				<img onClick={() => popUp('o neném com a coberta')} className='imgp' alt='' src={img16}/>
			</div>
			<p></p>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
				<img onClick={() => popUp('essa foto me lembra um vídeo do inutilismo kkkkkk')} className='imgg' alt='' src={img1}/>
				<img className='imgh' alt='' src={img11}/>
				<img className='imgi' alt='' src={img9}/>
				<img className='imgj' alt='' src={img12}/>
				<img onClick={() => popUp('não sei porque mas acho essa foto muito engraçada')} className='imgq' alt='' src={img17}/>
				<img className='imgr' alt='' src={img13}/>
			</div>
		</div>
	)
}
/*c,o,g,h,j,r*/
export default Nose;