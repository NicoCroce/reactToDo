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
		this.handleAppToDo = this.handleAppToDo.bind(this);
	}

	handleAppToDo = (todo) => {
		let newTodo = this.state.todos;
		if (this.state.indexSelected != null) {
			newTodo[this.state.indexSelected] = todo;
		} else {
			newTodo[Date.now()] = todo;
		}

		this.setState({
			todos: newTodo
		});
	}

	handleRemove = (index) => {
		let newTodo = this.state.todos;
		delete newTodo[index];

		this.setState({
			todos: newTodo
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
						<span className="badge badge-pill badge-light ml-2"> {Object.keys(this.state.todos).length} </span>
					</a>
				</nav>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<div className="container">
					<div className="row mt-4">
						<TodoForm onAddToDo={this.handleAppToDo} initialState={this.state.initialState} />
						{
							Object.keys(this.state.todos).map((key) => {
								return <Card key={key} task={this.state.todos[key]} index={key} removeTodo={this.handleRemove} editTodo={this.handleEdit} />
							})
						}

					</div>
				</div>
			</div>
		);
	}
}

export default App;
