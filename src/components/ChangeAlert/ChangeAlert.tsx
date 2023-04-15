import React from 'react'
import { useStorageListener } from '../../hooks/LocalStorage/useStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ sincronize }:any) {
    const { show, toggleShow } = useStorageListener(sincronize);
    if (show)
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventanta del navegador</p>
                    <p>Quieres actualizar tus TODOs?</p>
                    <button
                        className='TodoForm-button TodoForm-button--add'
                        onClick={toggleShow}
                    >
                        Yes!
                    </button>
                </div>

            </div>
        );
    
    return null;
}

export { ChangeAlert }