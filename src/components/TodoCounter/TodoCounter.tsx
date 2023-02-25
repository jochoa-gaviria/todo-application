import React from 'react';
import './TodoCounter.css'

function TodoCounter({total, completed}:any) {
    return (
        <React.Fragment>
            <h2 className="TodoCounter">You completed {completed} of {total} TODOs</h2>
        </React.Fragment>
    )
}

export  { TodoCounter };