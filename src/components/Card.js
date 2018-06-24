import React, { Component } from 'react';

class Card extends Component {

    render() {
        const task = this.props.task;
        const index = this.props.index;

        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{task.title}</h3>
                        <span className="badge badge-pill badge-danger">{task.priority}</span>
                    </div>
                    <div className="card-body">
                        <p>{task.description}</p>
                        <p><strong>{task.responsible}</strong></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={() => this.props.removeTodo(index)}>DELETE</button>
                        <button className="btn btn-Light ml-10" onClick={() => this.props.editTodo(task, index)}>EDIT</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;