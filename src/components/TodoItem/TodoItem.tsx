import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon/DeleteIcon';
import './TodoItem.css'

function TodoItem(props:any){
    return (
        <React.Fragment>
            <li className='TodoItem'>
                <CompleteIcon 
                    completed={props.completed}
                    onComplete={props.onComplete}
                />
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
                <DeleteIcon  
                    onDelete={props.onDelete}
                />
            </li>
        </React.Fragment>
    )
}

export { TodoItem }