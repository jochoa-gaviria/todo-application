import React from 'react';

function TodoEmptySearchResults({searchText}:any) {
    return <p>No hay resultados para {searchText} </p>
}

export { TodoEmptySearchResults }