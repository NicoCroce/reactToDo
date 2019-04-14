import './helper';
import React, { Component } from 'react';
import './App.scss';
import MainContainerApp from './components/MainContainerApp';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<MainContainerApp />
		);
	}
}

export default App;
