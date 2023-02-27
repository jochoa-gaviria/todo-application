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

export const useLocalStorage = (itemName:string, initialValue:any) => {

  let localStorageItem = localStorage.getItem(itemName);
  let parsedItem:any;
  if (!localStorageItem){
    localStorageItem = JSON.stringify([])
    parsedItem = JSON.parse(localStorageItem);
    localStorage.setItem(itemName, JSON.stringify(initialValue))
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem:[ITodo]) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  }
  return [
    item, saveItem
  ]
}


function App() {
  const [todos, saveTodo] = useLocalStorage('TODOS', [])
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos:[ITodo] = todos.filter((todo: { completed: any; }) => !!todo.completed).length;
  const totalTodos = todos.length;
  let filterTodos = [];


  if (!(searchValue.length >= 1)){
    filterTodos = todos;
  }
  else {
    filterTodos = todos.filter((todo: { text: string; }) => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  }


  const completeTodo = (text:string) => {
    const index = todos.findIndex((todo: { text: string; }) => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = true;
    saveTodo(newTodos);
  };

  const deleteTodo = (text:string) => {
    const index  = todos.findIndex((todo: { text: string; }) => todo.text === text);
    const newTodos = [...todos];
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
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
