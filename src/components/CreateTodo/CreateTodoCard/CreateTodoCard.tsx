import React  from 'react';
import './CreateTodoCard.css'

function CreateTodoCard({ addTodo, setOpenModal }:any ){

    const [newTodoValue, setNewtodoValue] = React.useState('')


    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event:any) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChangeTextArea = (event:any) => {
        setNewtodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea 
                onChange={onChangeTextArea}
                value = {newTodoValue}
                placeholder='Añade una nueva tarea.'
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    className='TodoForm-button TodoForm-button--cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    className='TodoForm-button TodoForm-button--add'
                    type='submit'
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}

export { CreateTodoCard }