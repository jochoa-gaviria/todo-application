import React from 'react';
import { IoMdDoneAll as CheckIcon } from 'react-icons/io'
import { IoIosTrash as DeleteIcon } from 'react-icons/io'

const iconTypes:any = {
    "check": (color: string | undefined) => (
        <CheckIcon className='Icon-svg Icon-svg--check' fill={color} />
    ),
    "delete": (color: string | undefined) => (
        <DeleteIcon className='Icon-svg Icon-svg--delete' fill={color} />
    )
}

function TodoIcon( { type, color='gray', onClick }:any ) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            { iconTypes[type] (color) }
        </span>        
    );
}

export { TodoIcon }