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
import { ITodo } from '../../types/ITodo'
import { TodoEmptySearchResults } from '../TodoEmpty/TodoEmptySearchResults';

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

    <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        filterTodos={filterTodos}
        searchText={searchValue}
        onError={() => <TodoError/>}
        onLoading={() => <TodoLoading/>}
        onEmptyTodos={() => <TodoEmpty/>}
        onEmptySearchResults={(searchText:string) => <TodoEmptySearchResults searchText={searchText}/>}
        // render={(todo:ITodo) => (
        //     <TodoItem
        //         key={todo.text}
        //         text={todo.text}
        //         completed={todo.completed}
        //         onComplete={() => completeTodo(todo.text)}
        //         onDelete={() => deleteTodo(todo.text)}
        //     />
        // )} // >> render props
    >
        {(todo:ITodo) => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
        )} {/*Render function */}
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
