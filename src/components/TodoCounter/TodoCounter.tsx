import React from 'react';
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos }:any) {
    return (
        <React.Fragment>
            <h2 className="TodoCounter">You completed {completedTodos} of {totalTodos} TODOs</h2>
        </React.Fragment>
    )
}

export  { TodoCounter };