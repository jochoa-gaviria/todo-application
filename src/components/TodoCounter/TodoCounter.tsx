import React from 'react';
import { TodoContext } from '../../hooks/TodoContext/TodoContext';
import './TodoCounter.css'

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext); 
    return (
        <React.Fragment>
            <h2 className="TodoCounter">You completed {completedTodos} of {totalTodos} TODOs</h2>
        </React.Fragment>
    )
}

export  { TodoCounter };