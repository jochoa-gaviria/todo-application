import React from 'react';
import { TodoContext } from '../../hooks/TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodo/TodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal'
// import { TodoInputName } from './components/CreateTodo/TodoInputName/TodoInputName';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoCard } from '../CreateTodo/CreateTodoCard/CreateTodoCard';
import { TodoError } from '../TodoError/TodoError';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoEmpty } from '../TodoEmpty/TodoEmpty';


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
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {error && <TodoError error={error}/>}
            {loading && <TodoLoading />}
            {(!loading && !filterTodos?.length) && <TodoEmpty />}

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
                <CreateTodoCard />
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