import React from 'react';
import './CreateTodoButton.css'


function CreateTodoButton(props:any){

    const onClickButton = (msg:string) => {
        alert(msg);
    }

    return(
        <React.Fragment>
            <button className="CreateTodoButton"
            onClick={() => onClickButton('Hiciste clic')}>+</button>
        </React.Fragment>
    )
}

export { CreateTodoButton }