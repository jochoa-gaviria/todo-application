import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props:any){
    return(
        <React.Fragment>
            <button className="CreateTodoButton">+</button>
        </React.Fragment>
    )
}

export { CreateTodoButton }