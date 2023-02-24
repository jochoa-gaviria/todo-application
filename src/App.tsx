import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodo/TodoButton/CreateTodoButton';
// import { TodoInputName } from './components/CreateTodo/TodoInputName/TodoInputName';
// import { CreateTodoCard } from './components/CreateTodo/CreateTodoCard/CreateTodoCard';
import { TodoList } from './components/TodoList/TodoList';

const todos = [
  { text: 'Leer', completed: false },
  { text: 'Agradecer', completed: true },
]

function App() {
  return (
    <React.Fragment>
      {/* <CreateTodoCard>
          <TodoInputName />
          <CreateTodoButton />
      </CreateTodoCard> */}
      <TodoCounter />
      <TodoSearch />
      <TodoList>
          {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
