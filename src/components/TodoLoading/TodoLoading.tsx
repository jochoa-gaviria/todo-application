import React from 'react';
import './TodoLoading.css'

function TodoLoading() {
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>Estamos cargando tus TODOs...</p>
            <span className='Loadingtodo-deleteIcon'></span>
        </div>
    );
}

export { TodoLoading }