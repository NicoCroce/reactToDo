import React from 'react';
import TodoForm from '../TodoForm';
import Card from '../Card';

const TodoList = (props) => {
    const { handleAppToDo, initialState, todos, handleRemove, handleEdit } = props;

    return (
        <div className="container">
            <div className="row mt-4">
                <TodoForm onAddToDo={handleAppToDo} initialState={initialState} />
                {
                    Object.keys(todos).map((key) => {
                        return <Card key={key} task={todos[key]} index={key} removeTodo={handleRemove} editTodo={handleEdit} />
                    })
                }

            </div>
        </div>
    )
}

export default TodoList;

