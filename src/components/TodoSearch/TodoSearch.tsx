import React from 'react';
import './TodoSearch.css'

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event:any) => {
        setSearchValue(event.target.value);
    }

    return (
        <React.Fragment>
            <input 
                className='TodoSearch' 
                type="text" 
                placeholder="Search a task" 
                onChange={onSearchValueChange}
                value = {searchValue}
            />
        </React.Fragment>
    )
}

export  { TodoSearch };