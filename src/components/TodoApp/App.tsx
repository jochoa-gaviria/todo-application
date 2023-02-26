import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodo/TodoButton/CreateTodoButton';
// import { TodoInputName } from './components/CreateTodo/TodoInputName/TodoInputName';
// import { CreateTodoCard } from './components/CreateTodo/CreateTodoCard/CreateTodoCard';
import { TodoList } from '../TodoList/TodoList';


interface ITodo {
  text:string;
  completed:boolean;
}
// const defaultTodos = [
//   { text: 'Leer', completed: false },
//   { text: 'Agradecer', completed: true },
// ]



function App() {
  let localStorageTodo = localStorage.getItem('TODOS');
  let parsedTodos:[ITodo];
  if (!localStorageTodo){
    localStorageTodo = JSON.stringify([])
    parsedTodos = JSON.parse(localStorageTodo);
    localStorage.setItem('TODOS', JSON.stringify([]))
  } else {
    parsedTodos = JSON.parse(localStorageTodo);
  }
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let filterTodos = [];


  if (!(searchValue.length >= 1)){
    filterTodos = todos;
  }
  else {
    filterTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  }

  const saveTodo = (newTodos:[ITodo]) => {
    setTodos(newTodos);
    localStorage.setItem('TODOS', JSON.stringify(newTodos));
  }

  const completeTodo = (text:string) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos:[ITodo] = [...todos];
    newTodos[index].completed = true;
    saveTodo(newTodos);
  };

  const deleteTodo = (text:string) => {
    const index  = todos.findIndex(todo => todo.text === text);
    const newTodos:[ITodo] = [...todos];
    newTodos.splice(index, 1);
    saveTodo(newTodos);
  }

  return (
    <React.Fragment>
      {/* <CreateTodoCard>
          <TodoInputName />
          <CreateTodoButton />
      </CreateTodoCard> */}
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch  
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
          {filterTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
          ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
