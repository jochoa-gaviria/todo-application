import React from 'react';
import { useTodos } from '../../hooks/Todos/useTodos';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodo/TodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal'
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoCard } from '../CreateTodo/CreateTodoCard/CreateTodoCard';
import { TodoError } from '../TodoError/TodoError';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoEmpty } from '../TodoEmpty/TodoEmpty';
import { TodoHeader } from '../TodoHeader/TodoHeader';

function App() {
  const {                    
    error,
    loading, 
    filterTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
} = useTodos();


  // React.useEffect(() => {
    
  // }, [todos]); //If sent empty array [], just execute useEffect one time. 
  // // If sent state, just execute when state is updated.

  return (
    <React.Fragment>

    <TodoHeader>
        <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
    </TodoHeader>

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
            <CreateTodoCard 
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
        </Modal>
        )
    }
    <CreateTodoButton 
        setOpenModal={setOpenModal}
    />
  </React.Fragment>
);
}

export default App;
