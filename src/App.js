import './helper';
import React, { Component } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import Card from './components/Card';

import { todos } from './todos.json';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos,
			initialState: null,
			indexSelected: null
		};
	}

	handleAppToDo = (todo) => {
		this.setState({
			todos: [...this.state.todos, todo]
		})
	}

	handleRemove = (index) => {
		console.log(index)
		this.setState({
			todos: this.state.todos.filter((todo, i) => {
				return i != index;
			})

		})
	}

	handleEdit = (task, index) => {
		this.setState({ initialState: task, indexSelected: index });
	}

	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-dark">
					<a href="" className="text-white">
						TASKS
						<span className="badge badge-pill badge-light ml-2"> {this.state.todos.length} </span>
					</a>
				</nav>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<div className="container">
					<div className="row mt-4">
						<TodoForm onAddToDo={this.handleAppToDo} initialState={this.state.initialState} />

						
						{
							(() => {
								for(let key in this.state.todos) {
									<Card task={this.state.todos[key]} index={key} removeTodo={this.handleRemove} editTodo={this.handleEdit} />
								}
							})()
						}

					</div>
				</div>
			</div>
		);
	}
}

export default App;
