import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Albums from './Components/Albums/Albums';
import Beautiful from './Components/Beautiful/Beautiful';
import Nose from './Components/Nose/Nose';
import Out from './Components/Out/Out';
import Videos from './Components/Videos/Videos';
import './App.css';

const page = {
	route: 'home',
}

function showAlert(comment) {
    alert (comment);
}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = page;
	}

	onRouteChange = (route) => {
		this.setState({route: route})
	}

	popUp = (comment) => {
		showAlert(comment)
	}
  	render() {
  		const { route } = this.state;
	    return (
	      	<div className="App">
	      	{ route === 'home'
	        	? <div>
	        		<Nav popUp={this.popUp} onRouteChange={this.onRouteChange}/>
	        	</div>
	        	: ( 
	        		route === 'albums'
	        		? <div>
	        			<Albums onRouteChange={this.onRouteChange}/>
	        		</div>
	        		: (
	        			route === 'beautiful'
	        			? <div>
	        				<Beautiful popUp={this.popUp} onRouteChange={this.onRouteChange}/>
	        			</div>
	        			: (
	        				route === 'nose'
	        				? <div>
	        					<Nose popUp={this.popUp} onRouteChange={this.onRouteChange}/>
	        				</div>
	        				: ( route === 'out'
	        					? <Out popUp={this.popUp} onRouteChange={this.onRouteChange}/>
	        					: <Videos popUp={this.popUp} onRouteChange={this.onRouteChange}/>
	        				)
	        			)
	        		)
	        	)
	      	}
	      	</div>
	    )
  	}
}

export default App;
