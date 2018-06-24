import React, { Component, UI } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: {
                title: '',
                responsible: '',
                description: '',
                priority: 'low'
            },
            openForm: false
        };
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            task: {
                [name]: value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.task)
        this.props.onAddToDo(this.state.task);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.initialState) {
            this.setState({
                task: {
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
        return this.setState({ 
            openForm: (() => !this.state.openForm)(),
            task: {
                title: '',
                responsible: '',
                description: '',
                priority: 'low'
            }
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
                            <input name="title" type="text" onChange={this.handleInput} className="form-control" placeholder="Titulo" value={this.state.task.title} />
                        </div>
                        <div className="form-group">
                            <input name="responsible" type="text" onChange={this.handleInput} className="form-control" placeholder="Responsable" value={this.state.task.responsible} />
                        </div>
                        <div className="form-group">
                            <input name="description" type="text" onChange={this.handleInput} className="form-control" placeholder="Descripcion" value={this.state.task.description} />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="priority" onChange={this.handleInput} value={this.state.task.priority}>
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