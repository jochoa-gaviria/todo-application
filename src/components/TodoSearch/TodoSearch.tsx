import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
    return (
        <React.Fragment>
            <input className='TodoSearch' type="text" placeholder="Search a task" />
        </React.Fragment>
    )
}

export  { TodoSearch };