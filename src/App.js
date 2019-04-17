import './helper';
import React, { Component } from 'react';
import './App.scss';
import MainContainerApp from './components/containers/MainContainerApp';
import { HeaderContainer } from './components/containers/HeaderContainer';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<HeaderContainer />
				<MainContainerApp />
			</div>
		);
	}
}

export default App;
