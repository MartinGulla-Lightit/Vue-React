import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoContext from '../providers/TodoContext.js';
import TodoPage from './TodoPage.jsx';

function App() {
    // useState is a hook that returns an array with the current state and a function to update it.
    // The first argument is the initial state.
    // The second argument is a function that updates the state.
    // The function takes the current state as an argument and returns the new state.
    // The state is updated automatically when the function is called.
    // The second argument isnt needed
    const [todos, setTodos] = useState([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Learn Vue', completed: false },
        { id: 3, title: 'Add Css to the app', completed: false },
    ]);
    const [ lastTodoId, setLastTodoId ] = useState(3);
    // the functions should be arrow functions, otherwise they will be bound to the component
    const addTodo = (title) => {
        const newTodo = {
            id: lastTodoId + 1,
            title : title,
            completed: false
        };
        // the ... is a function that "copies" the array (research shallow copy)
        setTodos([...todos, newTodo]);
        setLastTodoId(lastTodoId + 1);
    }
    const removeTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    const completeTodo = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(newTodos);
    }
    return (
        // Provider is a component that provides the context to the child components.
        // The child components can access the context through the useContext hook.
        // This makes it easier to share the state between components, unlike vue,
        // where you have to pass the state as a prop to the child components, and then
        // use the props to access the state, and emits to tell the parent component to update the state.
        <TodoContext.Provider
            // the value is an object with the functions and values that the child components can use
            value={{
                todos: todos,
                addTodo: addTodo,
                removeTodo: removeTodo,
                completeTodo: completeTodo
            }}
        >
            <TodoPage />
        </TodoContext.Provider>
    );
}

export default App;

// render the app
if (document.getElementById('app')) {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
}
