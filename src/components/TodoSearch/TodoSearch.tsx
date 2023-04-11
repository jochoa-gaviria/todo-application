import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }:any) {

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
                disabled = {loading}
            />
        </React.Fragment>
    )
}

export  { TodoSearch };