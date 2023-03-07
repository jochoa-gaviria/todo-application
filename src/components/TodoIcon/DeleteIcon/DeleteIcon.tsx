import React from 'react';
import { TodoIcon } from '../TodoIcon';

function DeleteIcon( { onDelete }:any ){
    return (
        <TodoIcon 
            type='delete'
            onClick={onDelete}
        />
    );
}

export { DeleteIcon }