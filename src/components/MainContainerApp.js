import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList';
import { todos } from '../todos.json';
import { addToDo } from '../actions';


class MainContainerApp extends Component {
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

        this.props.addToDo(newTodo);
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
            <div className="App" >
                <Header todoCount={Object.keys(this.state.todos).length} ></Header>
                <TodoList
                    handleAppToDo={this.handleAppToDo}
                    initialState={this.state.initialState}
                    todos={this.state.todos}
                    handleRemove={this.handleRemove}
                    handleEdit={this.handleEdit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToDo: value => dispatch(addToDo(value))
    }
};

export default connect(null, mapDispatchToProps)(MainContainerApp);

 