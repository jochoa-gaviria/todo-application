import React from 'react';
import { useLocalStorage } from '../LocalStorage/useLocalStorage'
import { ITodo } from '../../types/ITodo'


function useTodos() {

    const { item : todos,
        saveItem: saveTodo,
        loading,
        error,
        sincronize : sincronizeTodos
    } = useLocalStorage('TODOS', [])

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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

    const addTodo = (text:string) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text
        });
        saveTodo(newTodos);
    }

    return (
        {
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            error,
            loading,
            filterTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            sincronizeTodos
        }
    );
}

export { useTodos }
