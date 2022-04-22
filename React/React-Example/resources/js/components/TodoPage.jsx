import React, { useEffect, useContext } from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import TodoHeader from './TodoHeader.jsx';
import TodosInfo from './TodosInfo.jsx';
import TodoContext from '../providers/TodoContext.js';


function TodoPage() {
    const { todos } = useContext(TodoContext);
    // useEffect is a hook that runs when the component is mounted.
    // It also runs when the component is updated.
    // You can pass a second argument to the useEffect hook,
    // which is an array of dependencies.
    // If the dependencies change, the effect will run again.
    // If you don't pass any dependencies ([]), the effect will run only once (like mounted).
    useEffect(() => {
        console.log('component mounted');
    }, [todos]);
    return (
        // the compoent has to have only 1 child, just like in vue
        <div>
            <TodoHeader />
            <TodoForm />
            <TodoList />
            <TodosInfo />
        </div>
    );
}
export default TodoPage;
