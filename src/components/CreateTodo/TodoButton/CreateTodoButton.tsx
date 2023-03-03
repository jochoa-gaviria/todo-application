import React from 'react';
import './CreateTodoButton.css'


function CreateTodoButton(props:any){

    const onClickButton = () => {
        props.setOpenModal(true)
    }

    return(
        <React.Fragment>
            <button className="CreateTodoButton"
            onClick={onClickButton}>+</button>
        </React.Fragment>
    )
}

export { CreateTodoButton }