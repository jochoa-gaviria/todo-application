import React  from 'react';
import './TodoList.css'

function TodoList(props:any){
    const renderFunc = props.children || props.render;
    return (
        <React.Fragment>
            <section className="TodoList-container">
                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
                {(!!props.totalTodos && !props.filterTodos?.length) && props.onEmptySearchResults(props.searchText)}
                {(!props.loading && !props.error) && props.filterTodos.map(renderFunc)}
            </section>
        </React.Fragment>
    )
}

export { TodoList }