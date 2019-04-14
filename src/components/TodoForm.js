import React, { Component, UI } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoTask: {
                title: 'asd',
                responsible: 'qwe',
                description: 'rrrr',
                priority: 'low'
            },
            openForm: false
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        let newTask = {...this.state.todoTask, [name]: value}
        
        this.setState({
            todoTask: newTask
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddToDo(this.state.todoTask);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.initialState) {
            this.setState({
                todoTask: {
                    title: nextProps.initialState.title,
                    responsible: nextProps.initialState.responsible,
                    description: nextProps.initialState.description,
                    priority: nextProps.initialState.priority
                },
                openForm: true
            });
        }
    }

    toggleForm = () => {
        let clearTask = Object.assign({}, this.state.todoTask);
        clearTask = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        return this.setState({ 
            openForm: (() => !this.state.openForm)(),
            todoTask: clearTask
        });
    }

    render() {
        return (
            <div className="col-md-4" >
                <div className={'card card-form' + UI.class({'hidden-form': !this.state.openForm})}>
                    <button className="addTodo" onClick={this.toggleForm}>{this.state.openForm ? '-' : '+'}</button>
                    {/* <h2>{ this.state.isEditing ? 'Modifica la tarea' : 'Crea la tarea' }</h2> */}
                    <form action="" className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input name="title" type="text" onChange={this.handleInput} className="form-control" placeholder="Titulo" value={this.state.todoTask.title} />
                        </div>
                        <div className="form-group">
                            <input name="responsible" type="text" onChange={this.handleInput} className="form-control" placeholder="Responsable" value={this.state.todoTask.responsible} />
                        </div>
                        <div className="form-group">
                            <input name="description" type="text" onChange={this.handleInput} className="form-control" placeholder="Descripcion" value={this.state.todoTask.description} />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="priority" onChange={this.handleInput} value={this.state.todoTask.priority}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>Hight</option>
                            </select>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Save" />
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;