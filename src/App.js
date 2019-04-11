import React, { Component } from 'react';
import Router from './routes/Router';
import Navigation from './components/navigation';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>RandoStore Homepage</h1>
					<Navigation {...this.props}/>
					<Router />
				</div>
			</div>
		)
	}
}

export default App;