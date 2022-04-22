import React, { useContext } from 'react';
import TodoItem from './TodoItem.jsx';
import TodoContext from '../providers/TodoContext.js';

function TodoList() {
    // useContext(TodoContext) makes it possible to use the context without having to pass it as a prop.
    // { todos } is a destructuring assignment, it takes the .todos value of TodoContext and assigns it to todos.
    // this can be done with multiple values as well, like { todos, addTodo, removeTodo, completeTodo } if you need to.
    // this isnt only a react thing, it works in any javascript environment.
    const { todos } = useContext(TodoContext);
    return (
        <ul>
            {/* in vue we have v-for, here, we need to do array.map(<component/>) to loop */}
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    // here we pass props to the component because we dont want to pass the whole todos array
                    // we only want to pass the specific todo item
                    todo={todo}
                />
            )}
        </ul>
    );
}
export default TodoList;
