import React, { useContext, useState } from 'react';
import TodoContext from '../providers/TodoContext.js';

function TodoForm() {
    const { addTodo } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        if(e.key === 'Enter' || e.type === 'click') {
            if(title.trim() === '') {
                setError('Title is required');
                return;
            }
            e.preventDefault();
            addTodo(title);
            setTitle('');
            setError('');
        }
    }
    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div>
            <span>Create a new Todo: </span>
            <span>{error}</span>
            <input onKeyUp={ handleSubmit } onChange={ updateTitle } value={title} type="text" placeholder="What do you need to do?" />
            <button onClick={ handleSubmit }>Add</button>
        </div>
    );
}
export default TodoForm;
