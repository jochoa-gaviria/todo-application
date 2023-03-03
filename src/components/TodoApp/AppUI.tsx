import React from 'react';
import { TodoContext } from '../../hooks/TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodo/TodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal'
// import { TodoInputName } from './components/CreateTodo/TodoInputName/TodoInputName';
// import { CreateTodoCard } from './components/CreateTodo/CreateTodoCard/CreateTodoCard';
import { TodoList } from '../TodoList/TodoList';


function AppUI () {
    const {                    
        error,
        loading, 
        filterTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        {/* <CreateTodoCard>
            <TodoInputName />
            <CreateTodoButton />
        </CreateTodoCard> */}
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {error && <p>Hubo un error...</p>}
            {loading && <p>Estamos cargando, espera un momento...</p>}
            {(!loading && !filterTodos?.length) && <p>Crea tu primero TODO.</p>}

            {filterTodos.map((todo: { text: string; completed: any; }) => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>

        {
            !!openModal && 
            (        
            <Modal>
                <p>{filterTodos[0]?.text}</p>
            </Modal>
            )
        }

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
      </React.Fragment>
    );
}

export { AppUI }