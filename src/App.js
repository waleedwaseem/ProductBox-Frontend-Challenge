import React, { Component } from 'react';
import Router from './routes/Router';
import { connect } from 'react-redux';
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

function mapStateToProps(state) {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(App);