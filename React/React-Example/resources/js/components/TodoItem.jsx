import React, { useContext, useState } from 'react';
import TodoContext from '../providers/TodoContext.js';

function TodoItem(props) {
    const todo = props.todo;
    const { removeTodo, completeTodo } = useContext(TodoContext);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const editTodo = () => {
        setEditing(true);
        setTimeout(() => {
            const input = document.getElementById('title');
            input.focus();
        }, 1);
    };
    // since we dont have v-model, wich updates automatically, we need to update the state manually
    // we can use the events to listen to the changes, but we need to update the state manually
    const changeTodoTitle = (e) => {
        setTitle(e.target.value);
    };
    const saveTodo = () => {
        setEditing(false);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            saveTodo();
        }
    }
    return (
        <li>
            {/* like v-for, there isnt a v-if/v-else in react, instead, we can just ask if a variable is true
                and return a component in the case it is, and another if it is false
                if you only need a component in the true case, you can do { variable && <component/> } and
                it will only render when variable is true */}
            {!editing ? (
                <span onDoubleClick={editTodo}>{title}</span>
            ) : (
                <input id="title" type="text" onChange={changeTodoTitle} value={title} onBlur={saveTodo} onKeyUp={handleKeyPress} />
            )}
            {/* the functions called with onClick, and any other event has to be an arrow function,
                otherwise it will be called automatically */}
            <button onClick={() => completeTodo(todo.id)} >{ todo.completed ? 'Uncomplete ' : 'Complete'} todo</button>
            <button onClick={() => removeTodo(todo.id)} >Delete todo</button>
        </li>
    );
}
export default TodoItem;
