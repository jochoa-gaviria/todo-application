import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../../hooks/TodoContext/TodoContext';


// const defaultTodos = [
//   { text: 'Leer', completed: false },
//   { text: 'Agradecer', completed: true },
// ]

function App() {

  // React.useEffect(() => {
    
  // }, [todos]); //If sent empty array [], just execute useEffect one time. 
  // // If sent state, just execute when state is updated.

  return (
    <TodoProvider>
        <AppUI />
    </TodoProvider>
  );
}

export default App;
