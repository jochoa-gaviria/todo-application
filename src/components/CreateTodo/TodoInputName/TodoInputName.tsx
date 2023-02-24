import React from 'react';
import './TodoInputName.css'

function TodoInputName() {
    return (
        <React.Fragment>
            <input className='TodoInputName' type="text" placeholder="Walk the dog" />
        </React.Fragment>
    )
}

export  { TodoInputName };