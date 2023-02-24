import React from 'react';
import './TodoItem.css'

function TodoItem(props:any){

    const onComplete = () => {
        alert(`You completed the task "${props.text}"`);
    }

    const onDelete = () => {
        alert(`You deleted the task  "${props.text}"`);
    }

    return (
        <React.Fragment>
            <li className='TodoItem'>
                <span 
                    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                    onClick={onComplete}
                >
                    √
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
                <span 
                    className='Icon Icon-delete'
                    onClick={onDelete}
                >
                    X
                </span>
            </li>
        </React.Fragment>
    )
}

export { TodoItem }