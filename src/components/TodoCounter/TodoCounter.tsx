import React from 'react';
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos, loading }:any) {
    return (
        <React.Fragment>
            <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
                You completed {completedTodos} of {totalTodos} TODOs
            </h2>
        </React.Fragment>
    )
}

export  { TodoCounter };